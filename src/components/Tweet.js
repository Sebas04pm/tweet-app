import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const Tweet = ({ tweet, likeTweet, deleteTweet }) => {
  const handleLike = () => {
    likeTweet(tweet.id);
  };

  const handleDelete = () => {
    deleteTweet(tweet.id);
  };

  return (
    <div className="tweet">
      <p>{tweet.text}</p>
      <div className="tweet-actions">
        <button className={tweet.liked ? 'btn btn-danger' : 'btn btn-outline-danger'} onClick={handleLike}>
          <AiFillHeart />
        </button>
        <button className="btn btn-outline-danger" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Tweet;
