const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

app.post('/auth/sign_up', (req, res) => {
  // In this example, you would handle the request and send a response.
  // You might register the user and create a response object accordingly.
  const responseData = {
    success: true,
    message: 'User registration successful',
    // You can include additional data if needed
  };

  // Log the response data
  console.log('Response data:', responseData);

  // Send a JSON response to the client
  res.status(200).json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
