const chalk = require("chalk");

console.log(chalk.blue("Welcome to game Guess a number!"));

const readLine = require("readline").createInterface({
  output: process.stdout,
  input: process.stdin,
});

const randomNumber = Math.floor(Math.random() * 10);

const tryLimit = 3;

let tryCounter = 1;

const game = () => {
  if (tryCounter <= tryLimit) {
    readLine.question(chalk.yellow("Enter a random number \n"), (number) => {
      if (Number(number) === randomNumber) {
        console.log(chalk.green("Hooray, you won!"));
        readLine.close();
      } else if (Number(number) > randomNumber) {
        console.log("Your number is bigger than required number");
        tryCounter += 1;
        game();
      } else if (Number(number) < randomNumber) {
        console.log("Your number is less than required number");
        tryCounter += 1;
        game();
      }
    });
  } else {
    console.log(chalk.red("You have wasted all of your tries! Game over!"));
    readLine.close();
  }
};

game();
