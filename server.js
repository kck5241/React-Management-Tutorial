const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': 'name',
      'day': '890914',
      'gender': 'man',
      'job': 'progrem'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': 'name1',
      'day': '860808',
      'gender': 'man',
      'job': 'not'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': 'name2',
      'day': '091212',
      'gender': 'man',
      'job': 'student'
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));