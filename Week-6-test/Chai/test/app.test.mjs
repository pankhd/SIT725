import axios from "axios";
import { expect } from "chai";
import Pizza from "../src/pizzaModel.js"; 

const app = "http://localhost:3000"; 
const addPizza = "/add-pizza";
const allPizzas = "/all-pizzas";

const testPizza = new Pizza({
  name: "Cheese",
  ingredients: ["Cheese", "Olive", "Garlic"], 
  price: 12.99
});

describe("Test pizza api endpoint", function () {
  it("Test /add-pizza values", async () => { 
    const response = await axios.post(`${app}${addPizza}`, testPizza); //
    expect(response.status).to.equal(201); 
    expect(response.data).to.deep.equal(testPizza); 
  });
});
