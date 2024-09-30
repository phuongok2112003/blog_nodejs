const express = require('express');
const app = express();
const port = 3000;

// Route cơ bản
app.get('/tin', (req, res) => {
  res.send('Hello, Node.js backend!');
});

// Server lắng nghe tại cổng 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
