const express = require('express');
const app = express();
app.get('/health', (req, res) => res.json({ status: 'ok', service: 'auth-service', version: '1.0.0' }));
app.post('/login', express.json(), (req, res) => res.json({ token: 'mock-jwt-token-12345', user: req.body.username }));
module.exports = app;
