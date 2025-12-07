const Gcontent = document.getElementById("game");
const P1 = document.getElementById("P1");
const P2 = document.getElementById("P2");

function Sgame(){
        Gcontent.style.visibility = "visible";
       // P1.style.visibility = "visible";
        
        if (canPlay){
                P1.style.visibility = "visible";
        }
}

function Hgame(){
    Gcontent.style.visibility = "hidden";
    P2.style.visibility = "hidden";
    document.getElementById("game").style.visibility = "visible";
        
        picked.textContent = "#";
        Cpicked.textContent = "#";
        Result.textContent = "#";
        
        canPlay = true;
}

let wins = document.getElementById("wins");
let lose = document.getElementById("lose");
let S_wins = document.getElementById("Stats_wins");
let S_lose = document.getElementById("Stats_lose");

let Wcount = 0;
let Lcount = 0;
lose.textContent = Lcount;
wins.textContent = Wcount;
S_lose.textContent = Lcount;
S_wins.textContent = Wcount;

let canPlay = true;

let Swins = localStorage.getItem("wins");
let Slose = localStorage.getItem("lose");

if (Swins){
        Wcount = Number(Swins);
        wins.textContent = Wcount;
        S_wins.textContent = Wcount;
}

if (Slose){
        Lcount = Number(Slose);
        lose.textContent = Lcount;
        S_lose.textContent = Lcount;
}

const Player_pick = [document.getElementById("Rpick"),document.getElementById("Ppick"),
document.getElementById("Spick")];

let picked = document.getElementById("picked");
let Cpicked = document.getElementById("Cpicked");
let Result = document.getElementById("result");
const choices = ["rock", "paper", "scissors"];

Player_pick[0].onclick = function() {if (canPlay){playGame("rock");}}
Player_pick[1].onclick = function() {if (canPlay){playGame("paper");}}
Player_pick[2].onclick = function() {if (canPlay){playGame("scissors");}}

let history = [];

function playGame(Pchoice){
                
        P1.style.visibility = "hidden";
        P2.style.visibility = "visible";
        
        picked.textContent = Pchoice;
        canPlay = false;
        
        let Cchoice = choices[Math.floor(Math.random() * 3)];
        Cpicked.textContent = Cchoice;
        
        if (Pchoice === Cchoice){
    Result.textContent = "draw!";
}else if (Pchoice === "rock" && Cchoice === "paper" || Pchoice === "paper" && Cchoice === "scissors" || Pchoice === "scissors" && Cchoice === "rock"){
        Result.textContent = "Lose!";
        Lcount++;
        lose.textContent = Lcount;
        S_lose.textContent = Lcount;
        localStorage.setItem("lose", Lcount);
}else{
       Result.textContent = "Win!";
        Wcount++;
        wins.textContent = Wcount;
        S_wins.textContent = Wcount;
        localStorage.setItem("wins", Wcount);
}
        
        history.push(`You: ${Pchoice} vs Computer: ${Cchoice} - ${Result.textContent}`);
        
        setTimeout(function(){
                Hgame();
        },5000);
        
}

function Shistory() {
    let historyList = document.getElementById("Hlist");
    historyList.innerHTML = "";
    
    let recent = history.slice(-10).reverse();
    
    if (recent.length === 0) {
        historyList.innerHTML = "<p>No games yet!</p>";
    } else {
        recent.forEach(game => {
            historyList.innerHTML += `<p>${game}</p>`;
        });
    }
    
    document.getElementById("Phistory").style.visibility = "visible";
}

function CTheme(){
        document.body.classList.toggle("dark-theme");
        
        if (document.body.classList.contains("dark-theme")){
                localStorage.setItem("theme", "dark");
        }else{
                localStorage.setItem("theme", "light");
        }
}

let STheme = localStorage.getItem("theme");
if (STheme === "dark"){
        document.body.classList.add("dark-theme");
}


function OButton(){
        document.getElementById("Scontent").style.visibility = "visible";
}

function CButton(){
        document.getElementById("Scontent").style.visibility = "hidden";
}

let Ttime = Number(localStorage.getItem("siteTime")) || 0;

function Utimer(){
        Ttime++;
        localStorage.setItem("siteTime", Ttime);
        document.getElementById("timer").textContent = Ttime +"s";
}

setInterval(Utimer, 1000);

function Sstats(){
        document.getElementById("Pstats").style.visibility = "visible";
}

function Cstats(){
        document.getElementById("Pstats").style.visibility = "hidden";
}

function Chistory(){
        document.getElementById("Phistory").style.visibility = "hidden";
}





