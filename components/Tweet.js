import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Tweet(props) {
  return (

    <div className={styles.tweetContainer}>
        <div className={styles.tweetHeader}>
            <img className={styles.avatar} src='./images/avatar.png' alt='avatar' />
            <span className={styles.firstName}>{props.firstname}</span>
            <span className={styles.userName}>{props.username}</span><span className={styles.hourAgo}> - 5 hours ago</span>
        </div>
        <p className={styles.message}>{props.message}</p>
        <div className={styles.likesContainer}>
            <FontAwesomeIcon className={styles.heart} icon={faHeart} /><span> {props.likes}</span>
        </div>
    </div>
  );
}

export default Tweet;
