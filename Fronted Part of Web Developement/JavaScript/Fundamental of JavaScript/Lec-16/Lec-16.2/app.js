const favMovie = "avatar";

let guess = prompt("Enter your movie : ");

while(guess != favMovie) {
    if(guess == "quit") {
        console.log("You quit the game.");
    }
    guess = prompt("Wrong Guess! Please try again.");
}

if(guess == favMovie) {
    console.log("Congratulations!! Your guess movie is right.");
}