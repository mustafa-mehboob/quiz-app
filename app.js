function login() {

    var email = localStorage.getItem("create_email")
    var password = localStorage.getItem("create_password")

    var email1 = document.getElementById("email").value
    var password1 = document.getElementById("password").value

    if (email === email1 && password1 === password) {
        window.location.href = "quiz.html";
    } else {
        swal("Incorrect Account!!")
    }

    if (flage) {
        window.location.href = "quiz.html";
    } else {
        window.location.href = "index.html";
    }

    email1.value = ""
    password1.value = ""
    console.log(password1.value);
    console.log(email1.value);
}

function quiz() {
    var first_name = document.getElementById("username").value;
    var create_email = document.getElementById("create_email").value;
    var create_password = document.getElementById("create_password").value;

    var firstnameregex = /^[a-z ,.'-]+$/i.test(first_name);
    var emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(create_email);
    var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(create_password);

    if (firstnameregex && emailRegex && passwordRegex) {
        localStorage.setItem("first", first_name);
        localStorage.setItem("create_email", create_email);
        localStorage.setItem("create_password", create_password);
    }
    else {
        swal("wrong gamil")
        first_name = ""
        create_email = ""
        create_password = ""
    }
}