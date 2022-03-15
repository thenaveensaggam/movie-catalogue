const express = require("express");
const cors = require('cors');
const {apiRouter} = require("./router/apiRouter");

const hostname = "127.0.0.1";
const port = 5000;

const app = express();

// CORS
app.use(cors());

app.get('/', (request, response) => {
    response.json("Welcome to ");
});

// router
app.use('/api', apiRouter);

app.listen(port, hostname, () => {
    console.log(`Express Server is Started at http://${hostname}:${port}`);
});
