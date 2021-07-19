import { useState } from 'react';

import { quotes } from '../helpers/quotes';
import {colors} from '../helpers/colors';

export const Content = () => {
    
    
    const newQuote = () => {
        
        const quoteArray = quotes;
        const colorArray = colors;
        const newQuoteIndex = Math.floor(Math.random() * (0 - 101) + 101);
        const newColorIndex = Math.floor(Math.random() * (0 - 11) + 11);
        const newQuote = quoteArray[newQuoteIndex].quote;
        const newAuthor = quoteArray[newQuoteIndex].author;
        const newColor = colorArray[newColorIndex];
        
        return {
            quote: newQuote,
            author: newAuthor,
            color: newColor
        }
    }
    
    const [state, setstate] = useState(newQuote());

    const color = {
        color: state.color
    }
    const backgroundColor = {
        backgroundColor: state.color
    }

    /*const getColor = () => {
        const colorArray = colors;
        const newColorIndex = Math.floor(Math.random() * (0 - 11) + 11);
        const newColor = colorArray[newColorIndex];
    
        return newColor;
    
      }*/


    const handleClick = () => {
        setstate(newQuote());
    }

    return (
        <div>
            <h1 className="content__quote" id="text" style={color}>
                <i className="fas fa-quote-left" />
                {state.quote}
                <i className="fas fa-quote-right" />
            </h1>

            <h5 className="content__author" id="author" style={color}>
                - {state.author}
            </h5>

            <div className="content__wrapper-btn">
                <button className="content__btn" style={backgroundColor} id="new-quote" onClick={handleClick}>New Quote</button>
                <div>
                    <a href="https://twitter.com/intent/tweet" id="tweet-quote" title="Tweet this quote!" target="_top">
                        <button className="content__btn" style={backgroundColor}>
                            <i className="fab fa-twitter" />
                        </button>
                    </a>
                    <a href="https://www.tumblr.com/" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" rel="noreferrer">
                        <button className="content__btn" style={backgroundColor}>
                            <i className="fab fa-tumblr" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
