const navbar = document.getElementById("empty-text");

var flag = true;

function openSide(){
    flag = !flag;
    if(flag){
        navbar.style.display = "flex";
    }
    else{
        navbar.style.display = "none";
    }
};