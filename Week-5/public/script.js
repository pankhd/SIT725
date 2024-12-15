document.addEventListener('DOMContentLoaded', () => {
    const getAllPizzasBtn = document.getElementById('getAllPizzasBtn');
  
    getAllPizzasBtn.addEventListener('click', async () => {
      try {
        const response = await fetch('http://localhost:3000/all-pizzas');
        const data = await response.json();
  
        if (!Array.isArray(data.pizzas)) {
          throw new TypeError('Response does not contain an array of pizzas');
        }
  
        const pizzaTable = document.getElementById('pizzaTable');
        pizzaTable.innerHTML = ''; // Clear any existing rows
  
        data.pizzas.forEach(pizza => {
          const row = document.createElement('tr');
  
          const nameCell = document.createElement('td');
          nameCell.textContent = pizza.name;
          row.appendChild(nameCell);
  
          const ingredientsCell = document.createElement('td');
          ingredientsCell.textContent = pizza.ingredients.join(', ');
          row.appendChild(ingredientsCell);
  
          const priceCell = document.createElement('td');
          priceCell.textContent = pizza.price.toFixed(2); // Format price to 2 decimal places
          row.appendChild(priceCell);
  
          pizzaTable.appendChild(row);
        });
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    });
  });
  