import request from 'supertest'
import app from '/backend/server.js'

describe('Routes', () => {
  it('should login with correct credentials via route', async () => {
    const response = await request(app)
    .post('/clients/login')
    .send({email: 'test@example.com', password:'Password1'})
    .expect(200)

    expect(response.body).toBe.have.property('id')
    expect(response.body.email).to.equal('test@example.com');
  })
  it('should return 401 with incorrect login credentials via route', async () => {
    await request(app)
      .post('/clients/login')
      .send({ email: 'test@example.com', password: 'wrongpassword' })
      .expect(401);
  });
})