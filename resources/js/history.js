// Sample order history data (in a real app, this would be fetched from a database or API)
const orderHistory = [
    {
        orderId: 1,
        customerName: "John Doe",
        foodItem: "Pizza",
        quantity: 2,
        status: "Completed",
        details: "2 large pizzas, extra cheese"
    },
    {
        orderId: 2,
        customerName: "Jane Smith",
        foodItem: "Burger",
        quantity: 1,
        status: "Completed",
        details: "1 cheeseburger, fries"
    },
    {
        orderId: 3,
        customerName: "Sam Wilson",
        foodItem: "Pasta",
        quantity: 3,
        status: "Completed",
        details: "3 servings of spaghetti with marinara sauce"
    }
];

// Function to display the order history
function displayOrderHistory() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = ''; // Clear any existing rows

    orderHistory.forEach(order => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${order.orderId}</td>
            <td>${order.customerName}</td>
            <td>${order.foodItem}</td>
            <td>${order.quantity}</td>
            <td>${order.status}</td>
            <td>
                <button class="view-btn" onclick="viewDetails(${order.orderId})">View Details</button>
            </td>
        `;
        
        historyList.appendChild(row);
    });
}

// Function to view order details
function viewDetails(orderId) {
    const order = orderHistory.find(order => order.orderId === orderId);
    if (order) {
        alert(`Order Details:\n\nCustomer: ${order.customerName}\nFood Item: ${order.foodItem}\nQuantity: ${order.quantity}\nStatus: ${order.status}\nDetails: ${order.details}`);
    }
}

// Display order history when the page loads
document.addEventListener("DOMContentLoaded", displayOrderHistory);
