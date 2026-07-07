document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    if (!email.includes("@")) {
        emailError.textContent = "Invalid email format!";
        return;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters!";
        return;
    }

    alert("Login successful!");
});

// 🚀 Fetch Data from API
document.getElementById("fetchUser").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(data => {
            document.getElementById("userData").innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
        `;
        })
        .catch(error => console.error("Error fetching data:", error));
});
