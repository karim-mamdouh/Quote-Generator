//React
import { useEffect, useState } from "react";
//Styling file
import "./App.css";
//Components
import QuoteBox from "./components/QuoteBox/QuoteBox";

function App() {
  //Quotes array loaded from API request
  const [quotes, setQuotes] = useState([]);
  //Currently viewed quote index
  const [quoteIndex, setQuoteIndex] = useState(undefined);
  //API is called on component load to fill array
  useEffect(() => {
    fetch(
      `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setQuotes((state) => [...new Set([...state, ...res.quotes])]);
      });
  }, []);
  //Once array is filled a random index is genrated
  useEffect(() => {
    setQuoteIndex(Math.floor(Math.random() * quotes.length));
  }, [quotes]);

  const getQuote = () => {
    setQuoteIndex(Math.floor(Math.random() * quotes.length));
  };

  return (
    <main className="flex grow flex-col justify-center items-center bg-gray-700">
      {quoteIndex && (
        <QuoteBox quote={quotes[quoteIndex]} newQuote={getQuote} />
      )}
    </main>
  );
}

export default App;
