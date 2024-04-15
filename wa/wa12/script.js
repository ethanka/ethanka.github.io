// This example assumes you are using Node.js and have installed node-fetch or a similar library

const fetch = require('node-fetch'); // you need to install node-fetch or another HTTP client library

const access_token = '0J-A2OmXTQ6l_TZmrTLwGgQ56hshtbfju0MCzPngZZ69sg5hv0IXEi1Qon894GbX'; // The access token you received

function fetchQuote() {
    const api_url = 'https://api.genius.com/endpoint/where/quotes/are'; // You'll need to replace this with the correct Genius API endpoint

    fetch(api_url, {
        headers: { 'Authorization': `Bearer ${access_token}` }
    })
    .then(response => response.json())
    .then(data => {
        const quote = data.response; // You'll need to adjust this according to the actual structure of the response from Genius
        document.getElementById('quote').textContent = `"${quote.content}" - ${quote.author}`;
        document.getElementById('tweetQuote').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.content}" - ${quote.author}`)}`;
        document.getElementById('tweetQuote').style.display = 'inline';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('quote').textContent = "Error fetching quote.";
    });
}
