function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "password123") {
        alert("Login successful!");
        window.location.href = "../Admin/Dashboard/html/dashboard/dasboard.html";
    }else if(user === "" && pass === ""){
        alert("Customer Login successful!")
        window.location.href ="../htmls/CustomerHome.html";
    } else {
        document.getElementById("message").innerText = "Invalid username or password";
    }
}