const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Use the logger middleware
app.use(loggerMiddleware);

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});