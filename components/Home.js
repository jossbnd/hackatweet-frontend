import React from "react";
import styles from "../styles/Home.module.css";

import Tweet from './Tweet';

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { logout } from "../reducers/user";

export default function Home() {

  const [tweets, setTweets] = useState([]);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [refresh, setRefresh] = useState(0);

  const liked = useSelector((state) => state.liked.value);
  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
    .then(res => res.json())
    .then(data => {
      setTweets(data.tweets);
    })
  }, [refresh]);

  const handleTweet = () => {
    fetch(`http://localhost:3000/tweets/new/${user.token}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: message })
    })
    .then(res => res.json())
    .then(data => {
      if (data.result) {
        setMessage('');
        setErrorMessage('');
        setRefresh(refresh+1);
      } else {
        setErrorMessage(data.error);
      }
    })
  }

  const handleLogOut = () => {
    dispatch(logout());
  }

  const refreshInTweet = () => {
    setRefresh(refresh+1);
  }

  const tweetsData = tweets.map((tweet, i) => {
    const isLiked = liked.some(likedTweet => likedTweet.token === tweet.token);
    const isMine = tweet.username === user.username;
    return <Tweet key={i} {...tweet} isLiked={isLiked} refreshInTweet={refreshInTweet} isMine={isMine} />
  })

  console.log(user);

  return (
    <div className={styles.container}>
      <div className={styles.blockLeft}>
        <img
          src="/images/logo.png"
          alt="Logo"
          className={`${styles.logo} 
        ${styles.small}`}
        />
        <div className={styles.disconnectedButton}>
          <div className={styles.blockhaut}>
            <div>
              <img className={styles.avatar} src="/images/avatar.png"></img>
            </div>
            <div className={styles.blocktopright}>
              <div className={styles.pseudo}>{user.firstname}</div>
              <div className={styles.username}>@{user.username}</div>
            </div>
          </div>
          <button className={styles.button} onClick={handleLogOut}>Logout</button>

          <div></div>
        </div>
      </div>
      <div className={styles.blockCenter}>
        <div className={styles.newmessage}>
          <h3 className={styles.newMessageHeader}>Home</h3>
          <div className={styles.newInputContainer}>
            <input className={styles.newInput} onChange={(el) => setMessage(el.target.value)} value={message} placeholder="What's up?"/>
            <span style={{color: "white", fontWeight:"lighter"}}><i>{errorMessage}</i></span>
            <div className={styles.newInputBottom}>
              <span style={{color: "white", fontSize:"14px"}}>{message.length}/280</span>
              <button className={styles.newTweetButton} onClick={handleTweet}>Tweet</button>
            </div>
          </div>
        </div>
        <div className={styles.zonemessage}>
          {tweetsData}
        </div>
      </div>
      <div className={styles.blockRight}>block droite</div>
    </div>
  );
}
