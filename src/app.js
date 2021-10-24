const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const generateHtml = require('./page-template');

const promptRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What type of employee would you like to add?",
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]);
}

const promptManager = () => {
    if (!managerArr.managers) {
        managerArr.managers = [];
    };

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?"
        },
        {
            type: 'input',
            name: 'phone',
            message: "What is the manager's phone number?"
        }
    ])
    .then(managerInfo => {
        this.manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.phone)
        managerArr.managers.push(this.manager);
        console.log(managerArr.managers);
    });
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

// function generateSite() {
//     promptUser()
//         .then(answers => {
//             console.log(answers);
//             return generateHtml(answers);
//         })
//         .then(html => {
//             createFile(html);
//             copyCssFile();
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }

function generateSite() {
    promptRole()
        .then(role => {
            console.log(role);
            if (role === 'Manager') {
                promptManager(manager => {
                    console.log(manager);
                })
            }
        })
}

module.exports = generateSite;