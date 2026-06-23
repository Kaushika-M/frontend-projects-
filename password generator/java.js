function show(){
    let x=document.querySelector("#in").value;
    if(x<=0){
        alert("Enter a valid password length");
        return;
    }
    let chars ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_{|}~";

    let password="";
    for(let i=0;i<x;i++){
        const index = Math.floor(Math.random() * chars.length);
        password+= chars[index];
    }
    document.getElementById("pass").textContent = password;
}