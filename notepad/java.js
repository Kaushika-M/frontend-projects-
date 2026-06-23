window.onload = function () {
    document.getElementById("note").value =
        localStorage.getItem("note") || "";
};

function save() {
    let x = document.getElementById("note");

    if (x.value === "") {
        alert("Enter your notes to save");
    } 
    else {
        localStorage.setItem("note", x.value);
        alert("Note Saved!");
    }
}
function change(){
    if(document.body.style.backgroundColor=="white"){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        document.querySelector("h2").style.color="white";
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        document.querySelector("h2").style.color="darkblue";
    }
}