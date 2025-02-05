// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 4002;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const MONGO_URI = 'mongodb://localhost:27017/ordersdb'; // Replace with your MongoDB URI

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Order Schema and Model
const orderSchema = new mongoose.Schema({
  customer_name: { type: String, required: true },
  food_item: { type: String, required: true },
  quantity: { type: Number, required: true },
  address: { type: String, required: true },
  status: { type: String, required: true },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

// Endpoint to create a new order
app.post('/order', async (req, res) => {
  const { customer_name, food_item, quantity, address, status } = req.body;

  if (!customer_name || !food_item || !quantity || !address || !status) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newOrder = new Order({
      customer_name,
      food_item,
      quantity,
      address,
      status,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully.', order: newOrder });
  } catch (error) {
    res.status(500).json({ error: 'Error creating order.', details: error.message });
  }
});

// Endpoint to fetch all orders
app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders.', details: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
