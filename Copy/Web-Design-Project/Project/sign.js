

// ======================
// Signup Page Functionality
// ======================

const signupBtn = document.querySelector(".signup-card button");
if(signupBtn){
    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const firstName = document.querySelector(".signup-card input[placeholder='First Name']").value;
        const lastName = document.querySelector(".signup-card input[placeholder='Last Name']").value;
        const email = document.querySelector(".signup-card input[type='email']").value;
        const password = document.querySelector(".signup-card input[type='password']").value;
        const confirmPassword = document.querySelectorAll(".signup-card input[type='password']")[1].value;
        const checkbox = document.querySelector(".signup-card input[type='checkbox']").checked;

        if(!checkbox){
            alert("You must agree to the privacy and policy.");
            return;
        }

        if(password !== confirmPassword){
            alert("Passwords do not match!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users") || "{}");

        if(users[email]){
            alert("User already exists!");
            return;
        }

        users[email] = password;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account created successfully! You can now login.");
        window.location.href = "2-login.html"; // redirect to login page
    });
}
