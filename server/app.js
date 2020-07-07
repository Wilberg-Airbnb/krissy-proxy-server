const express = require('express');
const app = express();
const port = 1000;

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.listen(port, () => {
  console.log(`Listening at ${port}`);
});