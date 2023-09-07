/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * array of objects with data for quotes
***/

const quotes = [
  {quote: 'There is no force more powerful than a woman determined to rise.', source: 'W.E.B. Dubois', citation: 'https://www.goodgoodgood.co/'},
  {quote: 'There is no limit to what we, as women, can accomplish.', source: 'Michelle Obama', year: 2017},
  {quote: 'Everything is within your power, and your power is within you.', source: 'Janice Trachtman', tags:'#inspirational'},
  {quote: 'We may encounter many defeats but we must not be defeated.', source: 'Maya Angelou', tags:'#inspirational' },
  {quote: 'It took me quite a long time to develop a voice and now that I have it, I am not going to be silent.', source: 'Madeleine Albright'}
];

/***
 * `getRandomQuote` function gets a random quote object from array
***/
const getRandomQuote = () => {
let randomNumber = Math.floor(Math.random() * quotes.length);
return quotes[randomNumber]
}


/***
 * `printQuote` function calls getRandomQuote and prints data
***/
const printQuote = () => {
let quoteObject = getRandomQuote();

let html = 
 ` <p class="quote">${quoteObject.quote}</p>
<p class="source">${quoteObject.source}`

if ('citation' in quoteObject) {
html += `<span class="citation"> ${quoteObject.citation}</span>`
}

if ('year' in quoteObject) {
  html += `<span class="year"> ${quoteObject.year}</span>`
}

if ('tags' in quoteObject) {
  html += `<span class="tags"> ${quoteObject.tags}</span>`
}

html += `</p>`
document.getElementById('quote-box').innerHTML = html;
document.body.style.backgroundColor = randomBGColor()
}


/***
 * `randomBGColor` function returns a random color
***/
const randomBGColor = () => {
  const randomVal = () => Math.floor(Math.random() * 256)
  const color = `rgb( ${randomVal()}, ${randomVal()}, ${randomVal()} )`
  // document.body.style.backgroundColor = color;
  return color
  }

setInterval(printQuote, 10000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);