function CTheme() {
    const isDark = document.body.classList.toggle("dark-theme");
    
    // Save what user actually chooses
    if (isDark) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

function OButton(){
        document.getElementById("Scontent").style.visibility = "visible";
}

function CButton(){
        document.getElementById("Scontent").style.visibility = "hidden";
}

        