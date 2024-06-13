function login() {
    var username = document.getElementById("username").value;

    alert(username);

    var password = document.getElementById("password").value;

    if(username === "" || password === "") {
        document.getElementById("error").innerHTML = "All textboxes are required";
    }

    else {
        document.getElementById("error").innerHTML ="Welcome";
    }
}

function forgot() {
    alert("You clicked forgot password");
}