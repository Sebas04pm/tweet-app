import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { Container } from 'react-bootstrap';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';

const App = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const storedTweets = localStorage.getItem('tweets');
    if (storedTweets) {
      setTweets(JSON.parse(storedTweets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      liked: false,
    };
    setTweets([...tweets, newTweet]);
  };

  const likeTweet = (id) => {
    const updatedTweets = tweets.map((tweet) =>
      tweet.id === id ? { ...tweet, liked: !tweet.liked } : tweet
    );
    setTweets(updatedTweets);
  };

  const deleteTweet = (id) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== id);
    setTweets(updatedTweets);
  };

  return (
    <Container>
      <h1 className="mt-3">Tweet App</h1>
      <TweetForm addTweet={addTweet} />
      <hr />
      <TweetList tweets={tweets} likeTweet={likeTweet} deleteTweet={deleteTweet} />
    </Container>
  );
};

export default App;
