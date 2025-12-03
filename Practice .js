let numb = 23-22;
let name = "axel";

console.log({
    numb
});
let num = 0;
if (numb >= 18) {
    console.log("hey");
    num += 1;
} else {
    console.log("okay");
    num += 2;
}

function greet(name) {
    return "hey " + name;
}

console.log(greet(name));
console.log(num);

let checker = false;

if (checker === false) {
    console.log("im dead");
} else {
    console.log("ehey");
}


document.getElementById("G").innerText = "Goodbye";

console.log(`This is the total: ${numb} from
    23-22 (${numb}-${num}));