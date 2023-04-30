#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import Conf from "conf";
const program = new Command();
const config = new Conf({ projectName: "vanilla" });
console.log(chalk.blueBright("yo, welcome to the vanilla cli tool"));
config.set("unicorn", "🦄");
console.log(config.get("unicorn"));
program
    .description("A CLI tool to say hello")
    .option("-n, --name <name>", "Hey, what's your name ?")
    .parse(process.argv);
const options = program.opts();
console.log(options.name);
const name = options.name || config.get("name") || "";
console.log("name is: ", name);
if (!name) {
    console.log(chalk.red("yo, enter your name ? "));
    process.exit(1);
}
config.set("name", name);
console.log(chalk.green(`Hello, ${name}!`));
