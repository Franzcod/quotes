/*
mas sitas para cargar :

https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json
*/

var quotes=[
	"Keep creating: the world yearns to celebrate your next masterpiece. ",
	"Life isnt about getting and having, its about giving and being.",
	"Whatever the mind of man can conceive and believe, it can achieve.",
	"Strive not to be a success, but rather to be of value.",
	"Two roads diverged in a wood, and I-I took the one less traveled by, And that has made all the difference.",
	"I attribute my success to this: I never gave or took any excuse.",
	"You miss 100% of the shots you don't take.",
	"Two roads diverged in a wood, and I-I took the one less traveled by, And that has made all the difference.",
	"I attribute my success to this: I never gave or took any excuse.",
	"The most difficult thing is the decision to act, the rest is merely tenacity.",
	"Every strike brings me closer to the next home run.",

]

var autors=[
	"- Ken Poirot",
	"- Kevin Kruse",
	"- Napoleon Hill",
	"- Albert Einstein",
	"- Robert Frost",
	"- Florence Nightingale",
	"- Wayne Gretzky",
	"- Robert Frost",
	"- Florence Nightingale",
	"- Amelia Earhart",
	"- Babe Ruth"

]



function newQuote(){
	var randomNumber=Math.floor(Math.random()*(quotes.length));
	document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
	document.getElementById('autorDisplay').innerHTML=autors[randomNumber];
}

window.addEventListener('load',newQuote());   /*  <-- para que cargu una cita cuando cargue la paguina  */