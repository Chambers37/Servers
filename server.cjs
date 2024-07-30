/*

Create a server
Create a basic React application
Deploy it
Call your server from your React code (useEffect) and display a list of whatever you choose

 */


const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`)
})