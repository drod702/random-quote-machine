import React, { useState, useEffect } from 'react';
import './App.scss';
import COLORS_ARRAY from './colorsArr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons'

let quoteDBUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

function App() {
  const [quote, setQuote] = useState('The most difficult thing is the decision to act.')
  const [author, setAuthor] = useState('Amelia Earhart')
  const [randomNumber, setRandomNumber] = useState(0)
  const [quotesArr, setQuotesArr] = useState(null)
  const [colors, setColors] = useState('#282c34')

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
    setColors(COLORS_ARRAY[randomNum])
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
      <header className="App-header" style={{backgroundColor: colors}}>
      <div id='quote-box' style={{color: colors}}>
          <p id='text'>
          <FontAwesomeIcon id='quoteMark' icon={faQuoteLeft} />{quote}
          </p>

          <p id='author'>
            - {author}
          </p>
      <div className='button'>
        <a href={encodeURI(`http://www.twitter.com/intent/tweet?=${quote} 
        -${author}`)} id='tweet-quote' style={{backgroundColor: colors}}>
          <FontAwesomeIcon icon={faTwitter} />

        </a>

          <button id='new-quote' onClick = {() => getRandomQuote()} style={{backgroundColor: colors}}> New Quote </button>
      </div>

      </div>
      </header>
    </div>
  );
}

export default App;
