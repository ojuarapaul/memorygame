function goAhead() {
    var t = setTimeout("window.open('game.html', '_self')", 4000);
}


function runGame() { // chooses a random number from 1 to 8 then displays the correspondent image
    var randomP1 = Math.floor(Math.random() * 8);
    randomP1 = randomP1 + 1;
    var img = document.createElement("img");
    img.src = ("images/" + randomP1 + ".png");
    var src = document.getElementById("image-1");
    img.style.width = '40%';
    img.style.height = 'auto';
    src.appendChild(img);
}