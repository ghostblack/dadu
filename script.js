var index = Math.floor(Math.random() * 10);
var index2 = Math.floor(Math.random() * 10);
while (index > 5) {
    index = Math.floor(Math.random() * 10);
}
while (index2 > 5) {
    index2 = Math.floor(Math.random() * 10);
}
switch (index) {
    case 0:
        document.querySelector("img").setAttribute("src", "images/dice1.png");
        break;
    case 1:
        document.querySelector("img").setAttribute("src", "images/dice2.png");
        break;
    case 2:
        document.querySelector("img").setAttribute("src", "images/dice3.png");
        break;
    case 3:
        document.querySelector("img").setAttribute("src", "images/dice4.png");
        break;
    case 4:
        document.querySelector("img").setAttribute("src", "images/dice5.png");
        break;
    case 5:
        document.querySelector("img").setAttribute("src", "images/dice6.png");
        break;

};
switch (index2) {
    case 0:
        document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
        break;
    case 1:
        document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
        break;
    case 2:
        document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
        break;
    case 3:
        document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
        break;
    case 4:
        document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
        break;
    case 5:
        document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
        break;

};
if (index + 1 > index2 + 1) {
    document.querySelector("h2").innerHTML = "Dice 1 Menang";
} else if (index2 + 1 > index + 1) {
    document.querySelector("h2").innerHTML = "Dice 2 Menang";
} else {
    document.querySelector("h2").innerHTML = "Imbang BOSS";
}






