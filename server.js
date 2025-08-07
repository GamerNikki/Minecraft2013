const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve all files from the "public" folder
app.use(express.static('public'));

// Optional: Fallback to index.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
