const form = document.getElementById("dataForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    try {
        // Send data to backend
        const response = await fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
            alert("Data submitted successfully!");
        } else {
            alert("Failed to submit data.");
        }
    } catch (error) {
        console.error("Error submitting data:", error);
        alert("An error occurred.");
    }
});
