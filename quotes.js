

console.log('script loaded');

// QUOTES DATABASE JAVASCRIPT

// feelings: happy, sad, angry, anxious

let lastFeeling = null;

const happyQuotes = [
    {text: "Our fate lives within us. You only have to be brave enough to see it.", author: "Merida", movie: "Brave"},
    {text: "Happiness is the richest thing we will ever own.", author: "Donald Duck", movie: "Mickey's Once Upon a Christmas"}
]

const sadQuotes = [
    {text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "Christopher Robin", movie: "Winnie the Pooh"},
    {text: "You must not let anyone define your limits because of where you come from. Your only limit is your soul.", author: "Gusteau", movie: "Ratatouille"},
    {text: "All it takes is faith and trust.", author: "Peter Pan", movie: "Peter Pan"},
    {text: "The things that make me different are the things that make me.", author: "Piglet", movie: "Winnie the Pooh"},
    {text: "When life gets you down, do you wanna know what youve gotta do? Just keep swimming.", author: "Dory", movie: "Finding Nemo"}
];

const angryQuotes = [
    {text: "If you do your best each and every day, good things are sure to come your way.", author: "Princess Tiana", movie: "The Princess and the Frog"},
    {text: "The past can hurt. But from the way I see it, you can either run from it, or learn from it.", author: "Rafiki", movie: "The Lion King"}
];

const anxiousQuotes = [
    {text: "Even miracles take a little time.", author: "Fairy Godmother", movie: "Cinderella"},
    {text: "The flower that blooms in adversity is the most rare and beautiful of all.", author: "The Emperor", movie: "Mulan"},
    {text: "The very things that hold you down are going to lift you up.", author: "Timothy Q. Mouse", movie: "Dumbo"},
    {text: "The only thing predictable about life is its unpredictability.", author: "Remy", movie: "Ratatouille"},
    {text: "Believe you can, then you will.", author: "Mulan", movie: "Mulan"},
    {text: "You see, when the world turns upside down, the best thing is to turn right along with it.", author: "Mary Poppins", movie: "Mary Poppins Returns"},
    {text: "From failure, we learn, from success, not so much.", author: "the Robinsons", movie: "Meet the Robinsons"},
    {text: "No matter how the wind howls, the mountain cannot bow to it.", author: "Mulan", movie: "Mulan"}
];

function selectQuote(feeling) {
    let quotesArray;
    switch(feeling) {
        case 'happy':
            quotesArray = happyQuotes;
            break;
        case 'sad':
            quotesArray = sadQuotes;
            break;
        case 'angry':
            quotesArray = angryQuotes;
            break;
        case 'anxious':
            quotesArray = anxiousQuotes;
            break;
        default:
            quotesArray = anxiousQuotes;
    }
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
}

let quote, text, author, movie;

function displayQuote(feeling) {
    quote = selectQuote(feeling);

    const text = document.getElementById('quote-text');
    const author = document.getElementById('quote-author');
    const movie = document.getElementById('quote-movie');

    const textContent = `"${quote.text}"`;
    const authorContent = `- ${quote.author}`;
    const movieContent = `(${quote.movie})`;

    lastFeeling = feeling;
};

// // Example usage:
// displayQuote('anxious');
// currentText = text;
// currentAuthor = author;
// currentMovie = movie;

document.addEventListener('DOMContentLoaded', () => {
    const feelingButtons = document.querySelectorAll('.feeling-btn').forEach(button => {
        button.addEventListener('click', () => {
            const feeling = button.dataset.feeling;
            displayQuote(feeling);
        });
    });
});

const newQuoteButton = document.getElementById('new-quote');
if (newQuoteButton) {
    newQuoteButton.addEventListener('click', () => {
        displayQuote('anxious'); // Default to anxious if no feeling is selected
    });

};
