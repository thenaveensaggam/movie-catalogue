const express = require('express');
const fs = require('fs');
const path = require('path');

const apiRouter = express.Router();

apiRouter.get('/movies', (request, response) => {
    fs.readFile(path.join(__dirname, '..', 'data', 'db.json'), 'utf-8', (err, data) => {
        let result = JSON.parse(data);
        response.status(200).json(result);
    });
});

module.exports = {
    apiRouter
}