// Message container to store greeting message for Chinese New Year

const message = [
    "Happy Chinese new year. Wish you good health and much success in 2022!",
    "May good luck and success always follow you wherever you go. Wishing you in the year of Cat!",
    "May this new year be filled with happiness, prosperity, and many precious moments with your loved ones. Happy Chinese New Year 2022!",
    "Wishing you abundant luck, wealth, and opportunities in the coming year! Happy Chinese New Year!",
    "Happy Chinese New Year! May good fortune never leave your doorstep and keep blessing you!",
    "Gong Xi Fa Chai! Wishing You a Prosperous Chinese New Year 2022.",
    "May this new year bring all of us affluence in health and wealth. Happy lunar new year!",
    "May the divine blessings, good health, prosperity, and virtues never cease for you! Happy Chinese New Year!",
    "Let’s go off the demons and move on with the dreams. It’s time to start another year and another set of opportunities. Happy Chinese New Year 2022!"
];

function getGreeting(message){
    let lenght = message.lenght;
    console.log(lenght);
    let randomPosition = Math.floor(Math.random() * lenght);
    let greeting = message[randomPosition];
    // after generate a position of a message we return that whole message
    console.log(randomPosition);
    console.log(greeting);
    return greeting;
}

console.log(message);
console.log("It's new year time let see what fortune message we will have!")
console.log("Your message for this year is: " + getGreeting(message));