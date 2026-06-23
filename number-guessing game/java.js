let sec =Math.floor(Math.random()*100)+1;
let count=0;
let guess=[];

let msg = document.querySelector("#msg");
let num = document.querySelector("#num");

function show(){
    let x=document.querySelector("#num").value;
    let y=document.querySelector("#prev");
    if(num.value==''){
        alert("Enter the number");
        msg.innerText="Enter some number";
        return;
    }
    guess.push(x);
    prev.innerText=guess;
    count++;
    if(x==sec){
        msg.innerText="Correct!";
    }
    else{
        if(x > sec)
            msg.innerText ="Your Number is High";
        else
            msg.innerText ="Your Number is Low";    
    }
    
}
function answer(){
    if(count>=5){
        msg.innerText=`The number is ${sec}`;
        num.value='';
    }
    else{
        msg.innerText=`You have to guess atleast 5-fives to show the answer.`;
    }    
}
