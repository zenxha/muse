const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
  console.log("recieved request");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
