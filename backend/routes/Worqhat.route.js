const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');
const worqhatapikey = config.get('WORQHAT.APIKEY');

// Define your routes here
router.post('/text', async (req, res) => {
  // Extract data from the request body
  const { question } = req.body;

  // Create the payload for the external API
  const data = JSON.stringify({
    question,
    model: "aicon-v4-nano-160824",
    randomness: 0.5,
    stream_data: false,
    training_data: "",
    response_type: "text",
  });

  // Configure the external API request
  const config = {
    method: 'post',
    url: 'https://api.worqhat.com/api/ai/content/v4',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${worqhatapikey}` ,
    },
    data: data,
  };

  try {
    // Send the request to the external API
    const response = await axios(config);

    // Send the API's response back to the frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    // Handle errors and respond with a meaningful message
    res.status(500).json({
      error: 'An error occurred while processing your request.',
      details: error.message,
    });
  }
});


// Export the router
module.exports = router;