let users = JSON.parse(localStorage.getItem("user"))
console.log(users);
let error=document.querySelector(".errmsg")

function login() {
    var email = document.querySelector(".email").value
    var password = document.querySelector(".password").value
   
    if(users.filter((data)=> data.Email==email).length==1){
        console.log("login is succes");
        window.location.href="../shop/index.html"
    }
    else{
        error.innerHTML="Please enter valid email or signup "
    }
}

