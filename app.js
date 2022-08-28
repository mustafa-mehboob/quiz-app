

 





function login() {
    
    
    var email =  localStorage.getItem("create_email")
    var password = localStorage.getItem("create_password")
    
    var email1 = document.getElementById("email1").value
    var password1 = document.getElementById("password1").value
    
       if (email === email1 && password1 === password) {
           window.location.href = "quiz.html";
      } else {
          swal ("Incorrect Account!!")
              }
    
              email1.value=""
              password1.value=""
              console.log(password1.value);
              console.log(email1.value);
       
}
function quiz(){
    var first_name = document.getElementById("username").value;
    var create_email = document.getElementById("create_email").value;
    var create_password = document.getElementById("create_password").value;

    var firstnameregex = /^[a-z ,.'-]+$/i.test(first_name);
    var emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(create_email);
    var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(create_password);

if(firstnameregex && emailRegex && passwordRegex){
    localStorage.setItem("first",first_name);
    localStorage.setItem("create_email",create_email);
    localStorage.setItem("create_password",create_password);

}
else{
    swal("wrong gamil")
    // window.location='create login.html'

    first_name=""
    create_email=""
    create_password=""
    
}


}



// function signup() {
    
// }
// function login() {
//     var email = document.getElementById("email").value;
//     var pass = document.getElementById("password").value;

//     var email1 = localStorage.getItem("create_email")
//     var password = localStorage.getItem("create_password")

//     if (email === email1 && pass === password) {
//         window.location.href = "quiz.html";
//     } else {
//         swal ("Incorrect Account!!")
//     }
// }

// function submit() {
//     var fname = document.getElementById("username").value;
//     var create_email = document.getElementById("create_email").value;
//     var create_password = document.getElementById("create_password").value;

//     var firstNameregex = /^\s*$/.test(fname);
//     var emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(create_email);
//     var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(create_password);

//     if (firstNameregex === true) {
//         swal("Please Fill The FirstName Input")
//     }
//     if (passwordRegex === false) {
//         swal("Sorry! Please Enter Valid Password");
//     }
//     if (emailRegex === false) {
//         swal("Sorry! Please Enter Valid Email Id");
//     }
//     else if (firstNameregex === false  && emailRegex === true && passwordRegex === true) {
//         window.location.href = "index.html";
//         localStorage.setItem("firstname", fname)
//         localStorage.setItem("create_email", create_email)
//         localStorage.setItem("create_password", create_password)
//     }

//     var fname = " "
//     var create_email = " "
//     var create_password = " "
// }