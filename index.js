#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
//classes player & opponent
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
//  Player's name & select opponent
let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Please enter your name:"
});
let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "Select your opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
//  Gather data
let p1 = new Player(player.name);
let q1 = new Opponent(opponent.select);
do {
    //zkeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "Select your opponent",
            choices: ["Attack", "Drink portion", "Run for your life"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${q1.name} fuel is ${q1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose,Better luck time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                q1.fuelDecrease();
                console.log(chalk.bold.red(`${q1.name} fuel is ${q1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (q1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.red.bold.italic("You loose,Better luck time"));
            process.exit();
        }
    }
    //assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "Select your opponent",
            choices: ["Attack", "Drink portion", "Run for your life"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${q1.name} fuel is ${q1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose,Better luck time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                q1.fuelDecrease();
                console.log(chalk.bold.red(`${q1.name} fuel is ${q1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (q1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.red.bold.italic("You loose,Better luck time"));
            process.exit();
        }
    }
    //zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "Select your opponent",
            choices: ["Attack", "Drink portion", "Run for your life"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${q1.name} fuel is ${q1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose,Better luck time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                q1.fuelDecrease();
                console.log(chalk.bold.red(`${q1.name} fuel is ${q1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (q1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.red.bold.italic("You loose,Better luck time"));
            process.exit();
        }
    }
} while (true);
