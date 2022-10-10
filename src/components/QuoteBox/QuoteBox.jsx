//React
import React from "react";
import PropTypes from "prop-types";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteBox = ({ quote, newQuote }) => {
  return (
    <div
      id="quote-box"
      className="md:w-1/2 sm:w-3/4 w-11/12 p-10 bg-white rounded-3xl"
    >
      {/* Quote */}
      <h1 id="text" className="text-center text-2xl mb-10">
        <FontAwesomeIcon icon={faQuoteLeft} /> &nbsp; {quote.quote}
      </h1>
      {/* Author */}
      <p id="author" className="text-right">
        -{quote.author}
      </p>
      <div className="flex justify-between mt-5 sm:flex-row flex-col">
        {/* Tweet button */}
        <a
          id="tweet-quote"
          target="_blank"
          href={"https://twitter.com/intent/tweet?text=" + quote.quote}
          rel="noreferrer"
        >
          <button className="p-3 border rounded-lg bg-indigo-300 text-white sm:w-max w-full hover:text-black">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
        </a>
        {/* New quote button */}
        <button
          id="new-quote"
          className="border rounded-lg px-7 py-3 bg-indigo-300 text-white sm:w-max w-full sm:mt-0 mt-5 hover:text-black"
          onClick={() => {
            newQuote();
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};
//Component type validations
QuoteBox.propTypes = {
  quote: PropTypes.object.isRequired,
  newQuote: PropTypes.func.isRequired,
};

export default QuoteBox;
