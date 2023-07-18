let favMovie = "avatar";

let guess = prompt("Guess my favourite movie :");

while(guess != favMovie) {
    if(guess == 'quit'){
        console.log("You quit the game.");
    }
    guess = prompt("Wrong guess. Please try again!");
}

if(guess == favMovie) {
    console.log("Congrats!");
}