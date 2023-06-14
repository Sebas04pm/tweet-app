import React, { useState } from 'react';

const TweetForm = ({ addTweet }) => {
  const [tweet, setTweet] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweet.trim() === '') {
      setError(true);
      return;
    }
    addTweet(tweet);
    setTweet('');
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        className={error ? 'form-control is-invalid' : 'form-control'}
        placeholder="Escribe tu tweet..."
      />
      {error && <div className="invalid-feedback">El tweet no puede estar vacío.</div>}
      <button type="submit" className="btn btn-primary mt-3">Publicar</button>
    </form>
  );
};

export default TweetForm;
