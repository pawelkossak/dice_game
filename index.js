var losowa = Math.floor(Math.random() * 6) + 1;
var losowa1 = Math.floor(Math.random() * 6) + 1;
console.log(losowa);

document.querySelector("#one img").setAttribute("src", "./images/dice"+losowa+".png");
document.querySelector("#two img").setAttribute("src", "./images/dice"+losowa1+".png");

if (losowa > losowa1){
    document.querySelector("#title h1").textContent = "👈😼 PLAYER ONE WINS"
}

if (losowa < losowa1){
    document.querySelector("#title h1").textContent = "PLAYER TWO WINS 😼👉"
}

if (losowa1 === losowa) {
    document.querySelector("#title h1").textContent = "🙀 DRAW 🙀"
}