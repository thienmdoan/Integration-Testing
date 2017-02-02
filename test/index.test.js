const {expect} = require('chai');
const app = require('../index.js');
const request = require('request');

let server;
const TEST_PORT = '3000';
const HOST = `http://localhost:${TEST_PORT}/notes`;


describe('API', () => {

  before(done => {
      server = app.listen(TEST_PORT, () => {
        done()
      });
    });
  const options = { json: true };

  describe('GET', () => {
    it('should send a get request for the server', done => {
      request.get(HOST, options, (err, res, body) => {
        expect(err).to.be.eql(null);
        expect(body).to.be.an('array');
        expect(res.statusCode).to.equal(200)
        done();
      });
    });
  });
  describe('POST', () => {
    it('should send a post request for the server', done => {
      request.post(HOST, options, (err, res, body) => {
        expect(err).to.be.eql(null);
        expect(body).to.be.an('object');
        done();
      });
    });
  });

  after(() => {
      server.close();
    });

});
