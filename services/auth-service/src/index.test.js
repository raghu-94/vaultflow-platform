const request = require('supertest');
const app = require('./app');
describe('auth-service', () => {
  it('GET /health returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200); expect(res.body.status).toBe('ok');
  });
  it('POST /login returns a token', async () => {
    const res = await request(app).post('/login').send({ username: 'raghu' });
    expect(res.statusCode).toBe(200); expect(res.body.token).toBeDefined();
  });
});
