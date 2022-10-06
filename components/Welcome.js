// import 'antd/dist/antd.css';
import styles from '../styles/Welcome.module.css';
import { useState } from 'react';
import { Modal } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';


function Welcome() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [signUpIsClicked, setSignUpIsClicked] = useState(false)
    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    const [signInIsClicked, setSignInIsClicked] = useState(false)
    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);

    // FONCTIONS
    const handleSignUp = () => {
        setIsModalVisible(true);
        setSignUpIsClicked(true);
    };

    const handleSignIn = () => {
        setIsModalVisible(true);
        setSignInIsClicked(true);
    };

    const handleSignUpSubmit = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword})
        })
        .then(res => res.json())
        .then(data => {
            if (data.result) {

                dispatch(login({ token: data.token, username: data.username }));

                setIsModalVisible(false);
                setSignUpIsClicked(false);
        
                setSignUpFirstname('');
                setSignUpUsername('');
                setSignUpPassword('');

                setErrorMessage('');
            } else {
                setErrorMessage(data.error);
            }
        })
      };

    const handleSignInSubmit = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword})
        })
        .then(res => res.json())
        .then(data => {
            if (data.result) {

                dispatch(login({ token: data.token, username: data.username }));

                setIsModalVisible(false);
                setSignInIsClicked(false);
        
                setSignInUsername('');
                setSignInPassword('');

                setErrorMessage('');
            } else {
                setErrorMessage(data.error);
            }
        })
      };
    
    const handleCancel = () => {
        setIsModalVisible(false);
        setSignUpIsClicked(false);
        setSignInIsClicked(false);

        setSignUpFirstname('');
        setSignUpUsername('');
        setSignUpPassword('');

        setSignInUsername('');
        setSignInPassword('');

        setErrorMessage('');
    };




    // CONTENU DU MODAL
    let connectionWindow;

    if (signUpIsClicked) {
    connectionWindow = <div className={styles.connectionWindow}>
        <div className={styles.cancelButtonContainer}>
            <button className={styles.cancelButton} onClick={handleCancel}>X</button>
        </div>
        <img className={`${styles.logo} ${styles.small}`} src='/images/logo.png' />
        <h3 className={styles.modalH3}>Create your Hackatweet account</h3>
        <input className={styles.logInput} placeholder='Firstname' onChange={(el) => setSignUpFirstname(el.target.value)} value={signUpFirstname}/>
        <input className={styles.logInput} placeholder='Username' onChange={(el) => setSignUpUsername(el.target.value)} value={signUpUsername}/>
        <input type='password' className={styles.logInput} placeholder='Password' onChange={(el) => setSignUpPassword(el.target.value)} value={signUpPassword}/>
        <span style={{color: 'white', fontWeight: 'lighter'}}><i>{errorMessage}</i></span>
        <button className={styles.connectionWindowbutton} onClick={handleSignUpSubmit}>SIGN UP</button>
    </div>
    }

    if (signInIsClicked) {
        connectionWindow = <div className={styles.connectionWindow}>
        <div className={styles.cancelButtonContainer}>
            <button className={styles.cancelButton} onClick={handleCancel}>X</button>
        </div>
        <img className={`${styles.logo} ${styles.small}`} src='/images/logo.png' />
        <h3 className={styles.modalH3}>Connect to Hackatweet</h3>
        <input className={styles.logInput} placeholder='Username' onChange={(el) => setSignInUsername(el.target.value)} value={signInUsername}/>
        <input type='password' className={styles.logInput} placeholder='Password' onChange={(el) => setSignInPassword(el.target.value)} value={signInPassword}/>
        <span style={{color: 'white', fontWeight: 'lighter'}}><i>{errorMessage}</i></span>
        <button className={styles.connectionWindowbutton} onClick={handleSignInSubmit}>SIGN IN</button>
    </div>

    }

    return (
        <div className={styles.main}>
            <div className={styles.leftContent}>
                <img className={styles.logo} src='/images/logo.png' />

            </div>

            <div className={styles.rightContent}>
                <img className={`${styles.logo} ${styles.small}`} src='/images/logo.png' />
                <h1 className={styles.h1}>See what's happening</h1>
                <h3 className={styles.h3}>Join Hackatweet today.</h3>
                <div className={styles.log}>
                    <button className={`${styles.button} ${styles.signUp}`} onClick={handleSignUp}>SIGN UP</button>
                    <p>Already have an account?</p>
                    <button className={`${styles.button} ${styles.signIn}`} onClick={handleSignIn}>SIGN IN</button>
                </div>
            </div>

            {isModalVisible && <div className={styles.modalContainer} id='react-modals'>
                <Modal getContainer="#react-modals" open={isModalVisible} closable={false} footer={null}>
                    {connectionWindow}
                </Modal>

            </div>
            }

        </div>

    )

}

export default Welcome;

