import React from "react";
import styles from "../styles/Home.module.css";

import Tweet from './Tweet';

import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';

export default function Home() {

  const [tweets, setTweets] = useState([]);
  const [message, setMessage] = useState('');

  const liked = useSelector((state) => state.liked.value);

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
    .then(res => res.json())
    .then(data => {
      setTweets(data.tweets);
    })
  }, [])

  const tweetsData = tweets.map((tweet, i) => {
    const isLiked = liked.some(likedTweet => likedTweet.token === tweet.token)
    return <Tweet key={i} {...tweet} isLiked={isLiked} />
  })


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
              <div className={styles.pseudo}>John</div>
              <div className={styles.username}>@John Cenna</div>
            </div>
          </div>
          <button className={styles.button}>Logout</button>

          <div></div>
        </div>
      </div>
      <div className={styles.blockCenter}>
        <div className={styles.newmessage}>
          <h3 className={styles.newMessageHeader}>Home</h3>
          <div className={styles.newInputContainer}>
            <input className={styles.newInput} onChange={(el) => setMessage(el.target.value)} value={message} placeholder="What's up?"/>
            <div className={styles.newInputBottom}>
              <span style={{color: "white", fontSize:"14px"}}>0/280</span>
              <button className={styles.newTweetButton}>Tweet</button>
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
