const express = require('express');
const path = require('path');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  // res.send('Hello World');
  res.render('index', {
    title: 'Home',
    name: 'Edson Freire',
  });
});

app.listen(3500, () => {
  console.log("WebSite running on port 3000");
});