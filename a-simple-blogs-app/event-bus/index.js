const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const event = req.body;

  try {
    await axios.post('http://localhost:4000/events', event);
    await axios.post('http://localhost:4001/events', event);
    await axios.post('http://localhost:4002/events', event);
  } catch (err) {
    console.log(err);
  }

  res.send({ status: 'OK' });
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
