/* global it, describe */
const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

describe('routes.api', () => {
  it('should return list of presidents', (done) => {
    request(app)
      .get('/api/presidents')
      .expect('Content-Type', /json/)
      .expect(200)
    .then((res) => {
      expect(res.body.length).to.equal(45);

      expect(res.body[5].number).to.equal(6);
      expect(res.body[5].president).to.equal('John Quincy Adams');
      done();
    })
    .catch(err => done(err));
  });

  it('should return the correct president', (done) => {
    request(app)
      .get('/api/presidents/6')
      .expect('Content-Type', /json/)
      .expect(200)
    .then((res) => {
      expect(res.body.number).to.equal(6);
      expect(res.body.president).to.equal('John Quincy Adams');
      done();
    })
    .catch(err => done(err));
  });

  it('should return 404 for unknown president number', (done) => {
    request(app)
      .get('/api/presidents/99')
      .expect('Content-Type', /json/)
      .expect(404)
    .then(() => {
      done();
    })
    .catch(err => done(err));
  });
});
