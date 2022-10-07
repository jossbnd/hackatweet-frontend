import styles from '../styles/Trend.module.css';

function Trend(props) {

  return (

    <div className={styles.trendContainer}>
        <h3 className={styles.hashtag}>{props.hashtag}</h3>
        <span className={styles.count}>{props.count} Tweets</span>
    </div>
  );
}

export default Trend;
