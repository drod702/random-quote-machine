import React, { useState, useEffect } from 'react';
import './App.scss';

let quoteDBUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

function App() {
  const [quote, setQuote] = useState('The most difficult thing is the decision to act.')
  const [author, setAuthor] = useState('Amelia Earhart')
  const [randomNumber, setRandomNumber] = useState(0)
  const [quotesArr, setQuotesArr] = useState(null)

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArr(parsedJSON.quotes)
    console.log(parsedJSON)
  }

  useEffect(() => {
    fetchQuotes(quoteDBUrl)
  }, [quoteDBUrl])

  const getRandomQuote= () => {
    let randomNum = Math.floor(Math.random() * quotesArr.length)
    setRandomNumber(randomNum)
    setQuote(quotesArr[randomNum].quote)
    setAuthor(quotesArr[randomNum].author)
  }

  // const ourQuotesArr = [
  //   { 
  //     quote: 'The most difficult thing is the decision to act.',
  //     author: 'Amelia Earhart'
  //   },
  //   {
  //     quote: 'Dreaming, after all, is a form of planning.',
  //     author: 'Gloria Steinem'
  //   },
  //   {
  //     quote: 'People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.',
  //     author: 'Zig Ziglar'
  //   },
  //   {
  //     quote: 'Certain things catch your eye, but pursue only those that capture the heart.',
  //     author: 'Ancient Indian Proverb'
  //   }
  // ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Random Number: { randomNumber }</h1> */}
        <button onClick = {() => getRandomQuote()}> Random Number </button>
        <p>
          "{quote}"
        </p>
        <p>
          - {author}
        </p>
        {/* <button onClick = {() => changeQuoteAndAuthor0()}>Change Quote0</button>
        <button onClick = {() => changeQuoteAndAuthor1()}>Change Quote1</button>
        <button onClick = {() => changeQuoteAndAuthor2()}>Change Quote2</button> */}
      </header>
    </div>
  );
}

export default App;
