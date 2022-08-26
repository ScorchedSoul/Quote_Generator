// JAVASCRIPT FILE

const quoteContainer = document.getElementById('container_universal');
const quoteText = document.getElementById('quote');
const quoteMaster = document.getElementById('quoteMaster');
const twitterButton = document.getElementById('twitter');
const newQuote = document.getElementById('newQuote');


// LOCAL QUOTES - [NOT AN API]

localQuotes = [
  {
    "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison",
  },
  {
    "quote": "You can observe a lot just by watching.",
    "quoteMaster": "Yogi Berra",
  },
  {
    "quote": "A house divided against itself cannot stand.",
    "quoteMaster": "Abraham Lincoln",
  },
  {
    "quote": "Difficulties increase the nearer we get to the goal.",
    "quoteMaster": "Johann Wolfgang von Goethe",
  },
  {
    "quote": "Fate is in your hands and no one elses",
    "quoteMaster": "Byron Pulsifer",
  },
  {
    "quote": "Be the chief but never the lord.",
    "quoteMaster": "Lao Tzu",
  },
  {
    "quote": "Nothing happens unless first we dream.",
    "quoteMaster": "Carl Sandburg",
  },
  {
    "quote": "Well begun is half done.",
    "quoteMaster": "Aristotle",
  } ,
  {
    "quote" :  "The purpose of our lives is to be happy.",
    "quoteMaster" : "Dalai Lama",
  },
  {
    "quote" :  "Get busy living or get busy dying.",
    "quoteMaster" : "Stephen King",
  },
  {
    "quote" :  "You only live once, but if you do it right, once is enough.",
    "quoteMaster" : "Mae West",
  },
  {
    "quote" :  "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    "quoteMaster" : "Thomas A. Edison",
  },
  {
    "quote" : "Money and success don’t change people; they merely amplify what is already there." ,
    "quoteMaster" : "Will Smith",
  },
  {
    "quote" :  "The unexamined life is not worth living.",
    "quoteMaster" : "Socrates",
  },
]


// Calling the data from the localQuotes

function new_quote()
{
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
  
  // checking for "unknown" authors
  if(!quote.quoteMaster)
  {
    quoteMaster.textContent = 'Unknown';
  }
  else
  {
    quoteMaster.textContent = quote.quoteMaster;
  }

  // checking for quote length
  if (quote.quote.length > 100)
  {
    quoteText.classList.add('long-length');
  }
  else
  {
    quoteText.classList.remove('long-text');
  }
  quoteText.textContent = quote.quote;
}


// TWEET THE QUOTE
function tweetQuote()
{
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteMaster.textContent}`;
  window.open(twitterUrl, '_blank') ;
}

// EVENT LISTNERS

newQuote.addEventListener('click' , new_quote);
twitterButton.addEventListener('click', tweetQuote);


// on load

new_quote();



