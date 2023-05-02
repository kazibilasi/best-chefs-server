const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefsData = require('./data/chefs-data.json')


app.use(cors())

app.get('/', (req, res) => {
  res.send('Server running!');
})
app.get('/chefsdata', (req, res) => {
  res.send(chefsData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})