const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's full name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
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
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern', 'Employee']
        }
    ]);
}

function generateHtml(data) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            ${data.name}
        </body>
        </html>
    `
}

function createFile(content) {
    fs.writeFile('./dist/index.html', content, (err) => {
        if (err) throw err;
        console.log('File created!')
    })
}

function copyFile() {

}

function generateSite() {
    promptUser()
        .then(answers => {
            console.log(generateHtml(answers));
            return generateHtml(answers);
        })
        .then(html => {
            return createFile(html);
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = generateSite;