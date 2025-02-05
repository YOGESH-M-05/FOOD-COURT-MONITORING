// Submit order
document.getElementById('order-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const order = {
    customer_name: document.getElementById('customer-name').value,
    food_item: document.getElementById('food-item').value,
    quantity: document.getElementById('quantity').value,
    address: document.getElementById('address').value,
    status: 'Pending'
  };

  // Send the order to the server
  try {
    const response = await fetch('http://localhost:4002/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    });

    if (response.ok) {
      alert('Order submitted successfully!');
      document.getElementById('order-form').reset();
      loadOrders(); // Reload orders after successful submission
    } else {
      alert('Failed to submit order.');
    }
  } catch (error) {
    console.error('Error submitting order:', error);
    alert('An error occurred. Please try again.');
  }
});

// Fetch and display orders
async function loadOrders() {
  try {
      const response = await fetch('http://localhost:4002/orders');
      const orders = await response.json();
      const orderList = document.getElementById('order-list');
      orderList.innerHTML = '';
  
      orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${order.order_id}</td>
          <td>${order.customer_name}</td>
          <td>${order.food_item}</td>
          <td>${order.quantity}</td>
          <td>${order.address}</td>
          <td>${order.status}</td>
        `;
        orderList.appendChild(row);
      });
  } catch (error) {
      console.error('Error fetching orders:', error);
  }
}

// Load orders on page load
window.addEventListener('load', loadOrders);
