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
}

localStorage.setItem("theme", "dark");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}