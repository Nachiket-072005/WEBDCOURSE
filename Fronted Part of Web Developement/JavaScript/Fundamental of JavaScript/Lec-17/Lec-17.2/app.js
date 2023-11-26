const max = prompt("Enter the maximum number : ");

const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number : ");

while(true) {
    if(guess == "quit") {
        console.log("You quit the game!");
        break;
    }

    if(guess == random) {
        console.log("Congratulations!! Your guessed right. Random number was", random);
        break;
    }
    else if(guess < random) {
        guess = prompt("hint : Your guess was too small! Please try again.");
    } 
    else {
        guess = prompt("hint : Your guess was too large! Please try again.");
    }
}