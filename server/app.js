const express = require('express');
const app = express();
const port = 1000;

/* use this for query params in url */
// app.use(express.static('./public'));
app.use('/:listingId', express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.listen(port, () => {
  console.log(`Listening on ${port}`);
});