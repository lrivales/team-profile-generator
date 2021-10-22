const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const generateHtml = require('./page-template');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'team',
            message: 'What is the name of the team?',
            validate: teamInput => {
                if (teamInput) {
                    return true;
                } else {
                    console.log('Please enter a team name.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's full name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?"
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern', 'Employee']
        }
    ]);
}

function promptManager() {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'phone',
            message: 'What is the phone number?'
        }
    ])
}

function createFile(content) {
    fs.writeFile('./dist/index.html', content, (err) => {
        if (err) throw err;
        console.log('File created!')
    })
}

function copyCssFile() {
    fs.copyFile('./node_modules/spectre.css/dist/spectre.min.css', './dist/spectre.min.css', (err) => {
        if (err) throw err;
        console.log('CSS file copied.')
    })
}

function generateSite() {
    promptUser()
        .then(answers => {
            console.log(answers);
            return generateHtml(answers);
        })
        .then(html => {
            createFile(html);
            copyCssFile();
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = generateSite;