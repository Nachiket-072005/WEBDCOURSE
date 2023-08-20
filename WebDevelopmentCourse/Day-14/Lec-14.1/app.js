const max = prompt("Enter the maximum number : ");

const random = Math.floor( Math.random() * max ) + 1;

const guess = prompt("Guess the number : ");

while(true) {
    if(guess == "quit") {
        console.log("You quit the game.");
        break;
    }
    if(guess == random) {
        console.log("Congrats!! You are right. Random number was ",random);
        break;
    } else if(guess < random){
      guess = prompt("Hint : Your guess was too small. Please try again!");
    } else {
      guess = prompt("Hint : Your guess was too large. Please try again!");  
    }
}