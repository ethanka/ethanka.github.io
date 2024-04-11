// JavaScript Code (script.js)

// Select the new quote button using a querySelector
const newQuoteButton = document.querySelector('#js-new-quote');

// Write an event listener to check if the button is clicked
newQuoteButton.addEventListener('click', getQuote);

// The function to fetch and display a quote
function getQuote() {
    fetch('https://trivia.cyberwisp.com/getrandomchristmasquestion')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Output the quote to the console
        displayQuote(data); // Call to display the quote in the webpage
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while fetching the quote.');
    });
}

// Function to display the fetched quote
function displayQuote(data) {
    document.getElementById('js-quote-text').textContent = data.question;
    document.getElementById('js-answer-text').textContent = data.answer;
}

// Ensure a quote is displayed when the page is refreshed
document.addEventListener('DOMContentLoaded', getQuote);
