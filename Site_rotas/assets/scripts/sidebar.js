const navbar = document.getElementById("empty-text");

var flag = true;

// a function used for erasing the sidebar on small devices
function openSide(){ 
    flag = !flag;
    if(flag){
        navbar.style.display = "flex";
    }
    else{
        navbar.style.display = "none";
    }
};