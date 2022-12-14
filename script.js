let quotes = [
    `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,

    `"The way to get started is to quit talking and begin doing."`,

    `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. "`,

    `"If life were predictable it would cease to be life, and be without flavor. "`,

    `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,

    `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,

    `"Life is what happens when you're busy making other plans."`
]

let set = document.querySelector('.quote');
let button = document.querySelector('button');

button.addEventListener('click', newQuote);

function randomNumber(){

    return Math.floor(Math.random()*quotes.length);
}

function newQuote(){

    let randomQuote = quotes[randomNumber()];
    set.innerHTML = randomQuote;
}