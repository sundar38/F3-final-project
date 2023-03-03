
var signup = document.querySelector(".signup")
let error = document.querySelector(".errmsg")
signup.addEventListener("click", clicked)

function clicked() {
    console.log("hi");
    var fname = document.querySelector(".firstname").value
    var lname = document.querySelector(".lastname").value
    var email = document.querySelector(".email").value
    var password = document.querySelector(".password").value
    var cpassword = document.querySelector(".confirmpassword").value
    console.log(fname, lname, email);
    //email validation
    console.log(email.length);
    console.log(email.indexOf('@'));
    if(email.indexOf('@')!=email.length-10){
        error.innerHTML="@ should be inserted"
    }
    if(password!=cpassword){
        error.innerHTML="passowrd and confirm password should be same"
    }
    if(fname && lname&&email&& password==cpassword){
        console.log("all filled");
        let obj={
            Firstname: fname,
            Lastname: lname,
            Email: email,
            Password: password
        }
        console.log(obj);
        localStorage.setItem("user", JSON.stringify(obj))
        window.location.href="http://127.0.0.1:5501/shop/index.html"
    }
}