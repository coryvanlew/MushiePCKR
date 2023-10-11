let addresses = [
    "0x650C65A28285dA07700a4E444C889d2444d9Ff00",
    "0xa75c93E895DC2Fb3B034bf4AC59cf85c4C99aE1f",
    "0x1C86d5e842B7addeC2467eD054250C05f1b13a13",
    "0x1c4633F750ccdF4f40C9e88f5986A80c814B851f",
    "0x1c4633F750ccdF4f40C9e88f5986A80c814B851f",
    "0x650C65A28285dA07700a4E444C889d2444d9Ff00",
    "0x8B9A3A156A32a7Cf1b29b370B005A458D870176e",
    "0x650C65A28285dA07700a4E444C889d2444d9Ff00"
];
let index = 0;
let winner;
let isRevealed = false;

function setup() {
    createCanvas(800, 600);
    frameRate(2); // Set framerate to 1 FPS so each address displays for 1 second
}

function draw() {
    background('#ff91af'); // Pink background
    
    // Pink fill for the square and a white border
    fill('#ff91af');
    stroke(255); // White border
    strokeWeight(1);
    rect(50, 250, width - 100, 100); // Adjust the rectangle's position and size as needed

    // White text color for addresses and blue for the winner
    if (!isRevealed) {
        fill(255); // White color
        noStroke(); // No border for text
        textAlign(CENTER, CENTER);
        textSize(16);
        text(addresses[index], width/2, height/2);
        index = (index + 1) % addresses.length;
    } else {
        fill(0, 0, 255); // Blue color for the winner
        textSize(20);
        text(winner, width/2, height/2);
    }
}



function mousePressed() {
    if (!isRevealed) {
        winner = random(addresses);
        isRevealed = true;
    }
}

