const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Greetings Earthling.');
});

app.listen(port, () => {
    console.log(`<== Application started on port:${port} ==>`);
})