//random numbers 
var random1 = Math.floor((Math.random() * 6) + 1);
var random2 = Math.floor((Math.random() * 6) + 1);


var image1 = './images/dice' + random1 + '.png'

var image2 = './images/dice' + random2 + '.png'

document.querySelectorAll("img")[0].setAttribute('src', image1)
document.querySelectorAll("img")[1].setAttribute('src', image2)
    // document.getElementsByClassName('img1').setAttribute('src', './images/dice6.png');
    // document.getElementsByClassName('img2').setAttribute('src', './images/dice6.png');


var winner = " ";

if (random1 > random2) {
    winner = " 🚩 Player 1 Wins "
} else if (random1 < random2) {
    winner = " Player 2 Wins 🚩"
} else {
    winner = "it's a draw"
}

document.querySelector('h1').innerHTML = winner;