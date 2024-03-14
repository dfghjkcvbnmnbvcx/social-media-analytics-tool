// index.js

const twitterAPI = require('./twitter-api');
const dataProcessing = require('./data-processing');
const statisticalAnalysis = require('./statistical-analysis');
const networkAnalysis = require('./network-analysis');

// Example usage
const username = 'example_user';
twitterAPI.fetchTweets(username)
  .then(data => {
    const cleanedData = dataProcessing.cleanData(data);
    const frequency = statisticalAnalysis.calculateFrequency(cleanedData);
    const network = networkAnalysis.analyzeNetwork(cleanedData);

    console.log('Data:', cleanedData);
    console.log('Frequency:', frequency);
    console.log('Network:', network);
  })
  .catch(error => {
    console.error('Error fetching tweets:', error);
  });
