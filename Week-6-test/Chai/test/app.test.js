const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app'); // Adjust the path to your app.js

chai.use(chaiHttp);

describe('Float Input Validation', function() {
  // Test for valid float input
  it('should return 200 for a valid float input', function(done) {
    chai.request(app)
      .post('/check-float')
      .send({ price: '123.45' })
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message').that.equals('Valid float input.');
        expect(res.body).to.have.property('price').that.equals('123.45');
        done();
      });
  });

  // Test for non-numeric input
  it('should return 400 for a non-numeric input', function(done) {
    chai.request(app)
      .post('/check-float')
      .send({ price: 'abc' })
      .end(function(err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error').that.equals('Invalid input. Price must be a float.');
        done();
      });
  });

  // Test for integer input (if it's considered invalid)
  it('should return 400 for an integer input', function(done) {
    chai.request(app)
      .post('/check-float')
      .send({ price: '123' })
      .end(function(err, res) {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error').that.equals('Invalid input. Price must be a float.');
        done();
      });
  });

  // Test for edge case - zero as a float
  it('should return 200 for zero as a float', function(done) {
    chai.request(app)
      .post('/check-float')
      .send({ price: '0.0' })
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message').that.equals('Valid float input.');
        expect(res.body).to.have.property('price').that.equals('0.0');
        done();
      });
  });
});
