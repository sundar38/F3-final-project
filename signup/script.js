
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
    // console.log(email.length);
    // console.log(email.indexOf('@'));
    if (email.indexOf('@') != email.length - 10) {
        error.innerHTML = "@ should be inserted"
    }
    if (password != cpassword) {
        error.innerHTML = "passowrd and confirm password should be same"
    }

    if (fname && lname && email && password == cpassword) {

        //  localStorage.removeItem("user")
        let obj = {
            Firstname: fname,
            Lastname: lname,
            Email: email,
            Password: password
        } 
        var users=localStorage.getItem("user")
        //var userArr = JSON.parse(localStorage.getItem("user")) //returns all objects
        
        console.log(users);  
        if (users) {
            var userArr = JSON.parse(localStorage.getItem("user")) //returns all objects
            console.log("Userarr is",userArr);
            console.log(typeof(userArr));
            console.log("YES");
            // console.log(userArr.filter((data) => data.Email == email));
           
            if (userArr.filter((data) => data.Email == email).length == 1) {
                error.innerHTML = "User already exists.Try with another email or please login" //if same email already exist
            }
            else {
                console.log("new user");
                userArr.push(obj)     //add this obj to userarr           
                console.log(obj);
                console.log(userArr);
                localStorage.setItem("user", JSON.stringify(obj))
                window.location.href = "../Login/index.html"
            }

        }
        else{
            console.log("no");
            userArr=[obj] //if no obj create new obj
        }
        localStorage.setItem("user", JSON.stringify(userArr))

    }
}