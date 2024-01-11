// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', name: 'title', message: 'Project title:' },
    { type: 'input', name: 'description', message: 'Project description:' },
    { type: 'input', name: 'installation', message: 'Installation instructions:' },
    { type: 'input', name: 'usage', message: 'Usage information:' },
    { type: 'input', name: 'contributing', message: 'Contribution guidelines:' },
    { type: 'input', name: 'tests', message: 'Test instructions:' },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPL v3', 'Apache 2.0', 'BSD 3-Clause']
    },
    { type: 'input', name: 'githubUsername', message: 'GitHub username:' },
    { type: 'input', name: 'email', message: 'Email address:' }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Successfully created README.md');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

// Function call to initialize app
init();
