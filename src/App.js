import React, { useState } from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState('The most difficult thing is the decision to act.')
  const [author, setAuthor] = useState('Amelia Earhart')
  const [randomNumber, setRandomNumber] = useState(0)

  const changeQuoteAndAuthor0 = () => {
    setQuote('The most difficult thing is the decision to act.');
    setAuthor('Amelia Earhart')
  }

  const changeQuoteAndAuthor1 = () => {
    setQuote('Dreaming, after all, is a form of planning.');
    setAuthor('Gloria Steinem')
  }

  const changeQuoteAndAuthor2 = () => {
    setQuote('People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.');
    setAuthor('Zig Ziglar')
  }

  const genRandomNumber = () => {
    let randomNum = Math.floor(Math.random() * 3)
    setRandomNumber(randomNum)

    if (randomNum === 0) {
      changeQuoteAndAuthor0()
    }

    if (randomNum === 1) {
      changeQuoteAndAuthor1()
    }

    if (randomNum === 2) {
      changeQuoteAndAuthor2()
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number: { randomNumber }</h1>
        <button onClick = {() => genRandomNumber()}> Random Number </button>
        <p>
          "{quote}"
        </p>
        <p>
          - {author}
        </p>
        <button onClick = {() => changeQuoteAndAuthor0()}>Change Quote0</button>
        <button onClick = {() => changeQuoteAndAuthor1()}>Change Quote1</button>
        <button onClick = {() => changeQuoteAndAuthor2()}>Change Quote2</button>
      </header>
    </div>
  );
}

export default App;
