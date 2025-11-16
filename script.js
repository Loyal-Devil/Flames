var a= document.getElementById("user");

var b=document.getElementById("password");

var c=document.getElementById("alert");
function login(){
    if (a.value === 'admin' && b.value === 'admin'){
        window.location.href="index.html";
    }else{
        c.style.display = 'block';
    }
}    