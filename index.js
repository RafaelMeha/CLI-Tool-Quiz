#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const neonTitle = chalkAnimation.neon(
    'Who Wants To Be A Programmer Millionaire? \n'
  );

  await sleep();
  neonTitle.stop();

  console.log(`
    ${chalk.bgBlue('About the game')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...

  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;
}

function winner() {
  console.clear();
  figlet(`Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Programming isn't about what you know; it's about making the command line look cool`
      )
    );
    process.exit(0);
  });
}

async function question1() {
    const answers = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: 'What is the purpose of a version control system?',
      choices: [
        'To optimize database queries',
        'To facilitate server-client communication',
        'To design user interfaces',
        'To manage changes to source code and other documents',
      ],
    });
    return handleAnswer(answers.question_1 === 'To manage changes to source code and other documents');
  }
  
  async function question2() {
    const answers = await inquirer.prompt({
      name: 'question_2',
      type: 'list',
      message: 'What is a design pattern?',
      choices: [
        'A reusable solution to a commonly occurring problem within a given context',
        'A programming language feature',
        'A bug in the code',
        'A tool for compiling code',
      ],
    });
    return handleAnswer(answers.question_2 === 'A reusable solution to a commonly occurring problem within a given context');
  }
  
  async function question3() {
    const answers = await inquirer.prompt({
      name: 'question_3',
      type: 'list',
      message: 'What is the purpose of unit testing?',
      choices: [
        'To deploy software to production servers',
        'To optimize database performance',
        'To test individual units or components of a software',
        'To design user interfaces',
      ],
    });
    return handleAnswer(answers.question_3 === 'To test individual units or components of a software');
  }
  
  async function question4() {
    const answers = await inquirer.prompt({
      name: 'question_4',
      type: 'list',
      message: 'What is the role of a database in a web application?',
      choices: [
        'To format website content',
        'To store and manage data',
        'To handle user interactions',
        'To style the website',
      ],
    });
    return handleAnswer(answers.question_4 === 'To store and manage data');
  }
  
  async function question5() {
    const answers = await inquirer.prompt({
      name: 'question_5',
      type: 'list',
      message: 'What does the term "DRY" stand for in programming?',
      choices: [
        'Data Representation Yielding',
        'Document Retrieval Yield',
        'Don\'t Repeat Yourself',
        'Do Research Yourself',
      ],
    });
    return handleAnswer(answers.question_5 === 'Don\'t Repeat Yourself');
  }

console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
winner();