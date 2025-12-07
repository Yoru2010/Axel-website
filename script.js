function alert1() {
    alert("Good to hear!");
}

function alert2() {
    alert("I'm sorry to hear that");
}

function alert3() {
    alert("You are about to teleport");
}

function alert4() {
    alert("Can't proceed, the page is closed!");
}

function CTheme() {
    document.body.classList.toggle("dark-theme");
    
    if (document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
}

let Stheme = localStorage.getItem("theme");
if (Stheme === "dark"){
    document.body.classList.add("dark-theme");
}

function OButton(){
        document.getElementById("Scontent").style.visibility = "visible";
}

function CButton(){
        document.getElementById("Scontent").style.visibility = "hidden";
}