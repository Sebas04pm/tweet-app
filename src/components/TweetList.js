import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets, likeTweet, deleteTweet }) => {
  if (tweets.length === 0) {
    return <p>No hay tweets.</p>;
  }

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          likeTweet={likeTweet}
          deleteTweet={deleteTweet}
        />
      ))}
    </div>
  );
};

export default TweetList;
