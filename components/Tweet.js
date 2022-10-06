import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Tweet(props) {
  return (

    <div className={styles.tweetContainer}>
        <div className={styles.tweetHeader}>
            <img className={styles.avatar} src='./images/avatar.png' alt='avatar' />
            <span>{props.username}</span>
            <span className={styles.userName}>{props.username}</span><span> - </span><span>5 hours ago</span>
        </div>
        <p className={styles.message}>{props.message}</p>
        <div className={styles.likesContainer}>
            <FontAwesomeIcon icon={faHeart} /><span>{props.likes}</span>
        </div>
    </div>
  );
}

export default Tweet;
