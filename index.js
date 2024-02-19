const express = require('express');
const app = express();

// Chuyển hướng đến https://google.com
app.get('/', (req, res) => {
    res.redirect('https://google.com');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
