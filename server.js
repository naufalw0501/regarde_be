const express = require('express');
const path = require('path');

const app = express();
const PORT = 3004;

app.use(express.static(path.join(__dirname, 'build')));

// fallback untuk React Router
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`React build running at http://localhost:${PORT}`);
});
