import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addTweet, removeTweet } from '../reducers/liked';
import { useDispatch, useSelector } from 'react-redux';

function Tweet(props) {

const dispatch = useDispatch()

const handleLike = (props) => {
  if (props.isLiked) {
    dispatch(removeTweet(props));

  } else {
    dispatch(addTweet(props));
    
  }
}

let heartStyle = {};
if (props.isLiked) {
  heartStyle = {color: "red"}
}

  return (

    <div className={styles.tweetContainer}>
        <div className={styles.tweetHeader}>
            <img className={styles.avatar} src='./images/avatar.png' alt='avatar' />
            <span className={styles.firstName}>{props.firstname}</span>
            <span className={styles.userName}>{props.username}</span><span className={styles.hourAgo}> - 5 hours ago</span>
        </div>
        <p className={styles.message}>{props.message}</p>
        <div className={styles.likesContainer}>
            <FontAwesomeIcon style={heartStyle} onClick={() => handleLike(props)} className={styles.heart} icon={faHeart} /><span> {props.likes}</span>
        </div>
    </div>
  );
}

export default Tweet;
