// ======================
// Login Page Functionality
// ======================

// Password show/hide
const passwordInput = document.getElementById("password");
const showBtn = document.querySelector(".show-btn");

if(showBtn){
    showBtn.addEventListener("click", () => {
        if(passwordInput.type === "password") {
            passwordInput.type = "text";
            showBtn.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            showBtn.textContent = "Show";
        }
    });
}

// Login logic
const loginBtn = document.querySelector(".login-btn");
if(loginBtn){
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const username = document.querySelector(".login-card input[type='text']").value;
        const password = document.getElementById("password").value;

        let users = JSON.parse(localStorage.getItem("users") || "{}");

        if(users[username] && users[username] === password){
            alert(`Welcome back, ${username}!`);
            // Redirect to a dashboard page if you want
            window.location.href = "1-home.html";
        } else {
            alert("Invalid username or password!");
        }
    });
}
