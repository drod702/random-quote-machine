import React, { useState } from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState('The most difficult thing is the decision to act.')
  // let quote = 'The most difficult thing is the decision to act, the rest is merely tenacity.'
  const [author, setAuthor] = useState('Amelia Earhart')
  // let author = 'Amelia Earhart'

  const changeQuoteAndAuthor = () => {
    setQuote('Dreaming, after all, is a form of planning.');
    setAuthor('Gloria Steinem')
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          "{quote}"
        </p>
        <p>
          - {author}
        </p>

        <button onClick={() => changeQuoteAndAuthor()}>Change Quote</button>
      </header>
    </div>
  );
}

export default App;
