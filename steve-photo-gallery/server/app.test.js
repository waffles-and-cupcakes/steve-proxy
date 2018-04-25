const request = require('supertest');
const app = require('./app.js');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.disconnect();
});

describe('Test the root path', () => {
  test('It should send a response on a GET request', () => {
    return request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});