import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { addTweet, removeTweet } from '../reducers/liked';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function Tweet(props) {

const dispatch = useDispatch();
const [date, setDate] = useState(Date.now());

const dateDiff = Math.round((date - new Date(props.date)) / 1000 / 60 / 60) > 0 ? Math.round((date - new Date(props.date)) / 1000 / 60 / 60) + " hours" : "few minutes";

const handleLike = (props) => {
  if (props.isLiked) {
    dispatch(removeTweet(props));
  } else {
    dispatch(addTweet(props));
  }
}

const handleDelete = () => {
  fetch(`http://localhost:3000/tweets/delete/${props.token}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  })
  .then(res => res.json())
  .then(data => {
    if (data.result) {
      props.refreshInTweet();
    }
  })

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
            <span className={styles.userName}>{props.username}</span><span className={styles.hourAgo}> - {dateDiff} ago</span>
        </div>
        <p className={styles.message}>{props.message}</p>
        <div className={styles.likesContainer}>
            <FontAwesomeIcon style={heartStyle} onClick={() => handleLike(props)} className={styles.heart} icon={faHeart} /><span> {props.likes + (props.isLiked && 1)}</span>
            {props.isMine && <FontAwesomeIcon onClick={handleDelete} className={styles.trash} icon={faTrash} />}
        </div>
    </div>
  );
}

export default Tweet;
