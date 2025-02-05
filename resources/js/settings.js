// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("save-button");
    const successMessage = document.getElementById("success-message");
  
    // Handle save button click
    saveButton.addEventListener("click", function () {
      // Get form values
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Validate form inputs
      if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Simulate saving changes (you can replace this with actual logic)
      console.log("Changes saved:", { username, email, password });
  
      // Show success message
      successMessage.classList.remove("hidden");
      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 3000); // Hide the message after 3 seconds
    });
  });
  