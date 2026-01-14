const express = require('express');
const app = express();
const PORT = 3001;

// home route
app.get('/', (req, res) => {
    res.send('Hello, World!');
})


app.get('/about', (req, res) => {
    res.send('Hello, Welcome to the About Page!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
