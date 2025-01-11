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
    try {-0
      const response = await axios.get(`${app}${getAllPizzas}`);
      expect(response.status).to.equal(200);
      expect(response.data.pizzas).to.be.an('array');
      expect(response.data.pizzas.length).to.be.above(0);
    } catch (error) {
      expect.fail(error);
    }
  });
});


// Test adding multiple pizzas
  it('Test /add-pizza multiple pizzas', async () => {
    const pizza1 = { name: 'Pepperoni', ingredients: ['Pepperoni', 'Mozzarella'], price: 14.99 };
    const pizza2 = { name: 'Veggie', ingredients: ['Mushrooms', 'Onions', 'Bell Peppers'], price: 12.99 };

    const response1 = await axios.post(`${app}${addPizza}`, pizza1);
    expect(response1.status).to.equal(201);

    const response2 = await axios.post(`${app}${addPizza}`, pizza2);
    expect(response2.status).to.equal(201);

    const getAllResponse = await axios.get(`${app}${getAllPizzas}`);
    expect(getAllResponse.status).to.equal(200);
    expect(getAllResponse.data.pizzas.length).to.equal(2);
  });



  // Test error handling for invalid pizza data
it('Test /add-pizza invalid data', async () => {
  const invalidPizza = { name: '', ingredients: [], price: -1 };
  try {
    await axios.post(`${app}${addPizza}`, invalidPizza);
    expect.fail('Expected error to be thrown');
  } catch (error) {
    expect(error.response.status).to.equal(400);
  }
});


// Test error handling for non-existent pizza
it('Test /update-pizza non-existent pizza', async () => {
  const updatedPizza = { name: 'Meat Lover Deluxe', ingredients: ['Pepperoni', 'Sausage', 'Bacon', 'Ham'], price: 22.99 };
  try {
    await axios.put(`${app}/update-pizza/12345`, updatedPizza);
    expect.fail('Expected error to be thrown');
  } catch (error) {
    expect(error.response.status).to.equal(404);
  }
});

