let prizeDoor = Math.floor(Math.random() * 3) + 1;
let selectedDoor = 0;
let goatRevealed = false;

function chooseDoor(doorNumber) {
    if (!goatRevealed) {
        // First choice by player, reveal a goat that's not the prize and not the chosen door
        for (let i = 1; i <= 3; i++) {
            if (i !== prizeDoor && i !== doorNumber) {
                document.getElementById(`door${i}`).children[0].src = "goat.jpg";
                goatRevealed = true;
                break;
            }
        }
        selectedDoor = doorNumber;
        document.getElementById('game-message').innerText = "Would you like to switch your choice?";
    } else {
        // Final choice by player, reveal all doors
        revealAllDoors();
        if (doorNumber === prizeDoor) {
            document.getElementById('game-message').innerText = "You won a car!";
        } else {
            document.getElementById('game-message').innerText = "Sorry, it's a goat. You lose!";
        }
        document.getElementById('restart-button').style.display = 'block';
    }
}

function revealAllDoors() {
    for (let i = 1; i <= 3; i++) {
        let imgSrc = i === prizeDoor ? "car.jpg" : "goat.jpg";
        document.getElementById(`door${i}`).children[0].src = imgSrc;
    }
}

function restartGame() {
    window.location.reload(); // Simplest way to restart the game
}
