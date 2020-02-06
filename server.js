var input;

const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const Sample = require('./sample_data');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded());

app.post('/content/get', (request, response) => {
try {
    this.input = fs.readFileSync("/home/shankar/Desktop/LayoutService/data.json", { encoding: 'utf8' });    
} catch (error) {
    process.abort();
    console.error('Error reading file', error.stack);
}
  response.status(200);
  console.log('sending status code: ' + 200);
  response.json(JSON.parse(this.input));
  
});

app.get('/', (req, resp) => {

resp.status(200);
  const data = Sample.getAllSamples();
  return resp.json(data);
});

app.post('/fillSamples', (req, resp) => {
  let input = req.body;
  Sample.fillSamples(input);
  resp.status(200);
  return resp.json({ 'status': 'success' });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});



