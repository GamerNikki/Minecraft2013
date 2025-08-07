const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Basic homepage route
app.get('/', (req, res) => {
  res.send('Hello from Render!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
