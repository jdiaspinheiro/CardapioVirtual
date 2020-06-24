const express = require('express');
const PORT = process.env.PORT || 3000;

// Init App
const app = express();

// Set the public folder for use
app.use(express.static( __dirname + '/public' ));

// Home Route
app.get('/', (req, res) => {
});

// Start Server
app.listen(PORT, () => {
    console.log('Server started on port 3000...')
});