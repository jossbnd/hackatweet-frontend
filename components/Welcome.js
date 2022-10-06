// import 'antd/dist/antd.css';
import styles from '../styles/Welcome.module.css';
import { useState } from 'react';
import { Modal } from 'antd';

function Welcome() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
        console.log(isModalVisible)
      };

    const handleOk = () => {
        setIsModalVisible(false);
      };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

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
                    <button className={`${styles.button} ${styles.logIn}`} onClick={showModal}>SIGN IN</button>
                    <p>Already have an account?</p>
                    <button className={`${styles.button} ${styles.logOut}`}>SIGN UP</button>
                </div>
            </div>

            {isModalVisible && <div className={styles.connection} id='react-modals'>
                <Modal getContainer="#react-modals" className={styles.modal} title="Basic Modal" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>

            </div>
            }

        </div>

    )

}

export default Welcome;

