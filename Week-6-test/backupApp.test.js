
import axios from 'axios';
import {expect} from 'chai';

const app = 'http://localhost:3000/hello'

describe('API Endpoint', () => {
  it('should return "Hello, World!"', async () => {
    const response = await axios.get(app);
    expect(response.status).to.equal(200);
    expect(response.data).to.equal('Hello, World!');
  });
});
