const express = require('express');
const app = express();
const port = 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Another route for API
app.get('/api', (req, res) => {
  res.json({ message: 'This is a simple Node.js API.' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});