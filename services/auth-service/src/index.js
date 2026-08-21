const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// Health check endpoint — Kubernetes uses this for liveness probes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'auth-service', version: '1.0.0' });
});
// Mock auth endpoint
app.post('/login', express.json(), (req, res) => {
  res.json({ token: 'mock-jwt-token-12345', user: req.body.username });
});
app.listen(PORT, () => {
  console.log(`auth-service running on port ${PORT}`);
});
