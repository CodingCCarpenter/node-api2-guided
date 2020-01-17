const express = require('express');
const hubsRouter = require('/hubs/hubs-router.js')
const Hubs = require('./hubs/hubs-model.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.get('/api/hubs', (req, res) => {
  

module.exports = server;