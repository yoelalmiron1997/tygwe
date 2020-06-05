var quotes = [
  {
    quote: "Es mejor merecer honores y no tenerlos, que tenerlos sin merecerlos.",
    name: "Mark Twain"
  },
  {
    quote: "La gloria es fugaz, pero la oscuridad es para siempre.",
    name: "Napoleón Bonaparte"
  },
  {
    quote: "Veni, vidi, vici.",
    name: "Julio Cesar"
  }
  ];

$(document).ready(function () {
  getQuote();
});

function getQuote() {


  var sourceLength = quotes.length;
  var randomNumber = Math.floor(Math.random() * sourceLength);

  var timeAnimation = 500;
  document.getElementById('quote-text').innerHTML = quotes[randomNumber].quote;
  document.getElementById('quote-author').innerHTML = quotes[randomNumber].name;
  }; //end of fadeOut //end of getQuote
