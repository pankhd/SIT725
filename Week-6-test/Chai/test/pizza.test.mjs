import axios from "axios";
import { expect } from "chai";

const app = "http://localhost:3000"; 
const addPizza = "/add-pizza";
const getAllPizzas = "/all-pizzas";

const testPizza = {
  name: "Cheese",
  ingredients: ["Cheese", "Olive", "Garlic"],
  price: 12.99
};

describe('Test pizza API endpoint', function() {
  it('Test /add-pizza values and post request', async () => {
    try {
      const response = await axios.post(`${app}${addPizza}`, testPizza);
      expect(response.status).to.equal(201);
      expect(response.data.message).to.equal('Pizza added successfully!');
      expect(response.data.pizza.name).to.equal(testPizza.name);
      expect(response.data.pizza.ingredients).to.deep.equal(testPizza.ingredients);
      expect(response.data.pizza.price).to.equal(testPizza.price);
    } catch (error) {
      expect.fail(error);
    }
  });

  it('Test /all-pizzas values and get request', async () => {
    try {
      const response = await axios.get(`${app}${getAllPizzas}`);
      expect(response.status).to.equal(200);
      expect(response.data.pizzas).to.be.an('array');
      expect(response.data.pizzas.length).to.be.above(0);
    } catch (error) {
      expect.fail(error);
    }
  });
});