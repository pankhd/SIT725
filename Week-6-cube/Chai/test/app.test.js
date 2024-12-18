import { request }, chaiHttp from 'chai-http';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'; // Adjust the path to your app.js

const { expect } = chai;
chai.use(chaiHttp);

describe('Float Input Validation', function() {
  // Test for getting a list of pizzas
  it('should get a list of pizzas', function(done) {
    request(app)
      .get('/api/pizzas')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
        done();
      });
  });
});

