const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const generateHtml = require('./page-template');
const Employee = require('../lib/Employee');

const promptRole = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "What type of employee would you like to add?",
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ]);
}

const promptManager = (managerArr) => {
    if (!managerArr) {
        managerArr = [];
    };

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's employee ID?"
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
            managerArr.push(this.manager);
            return managerArr;
        });
}

const promptEngineer = engineerArr => {
    if (!engineerArr) {
        engineerArr = [];
    };

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub user name?"
        }
    ])
    .then(engineerInfo => {
        this.engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github)
        engineerArr.push(this.engineer);
        return engineerArr;
    });
}

const promptIntern = internArr => {
    if (!internArr) {
        internArr = [];
    };

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?"
        }
    ])
    .then(internInfo => {
        this.intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school)
        internArr.push(this.intern);
        return internArr;
    });
}

const promptAddMore = () => {
    return inquirer
    .prompt([
        {
            type: 'confirm',
            name: 'confirmAddMore',
            message: 'Would you like to enter another employee?',
            default: 'false'
        }
    ]);
}

function createFile(content) {
    fs.writeFile('./dist/index.html', content, (err) => {
        if (err) throw err;
        console.log('File created!')
    });
}

function copyCssFile() {
    fs.copyFile('./node_modules/spectre.css/dist/spectre.min.css', './dist/spectre.min.css', (err) => {
        if (err) throw err;
        console.log('CSS file copied.')
    });
}

// function buildTeam() {
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
  
function buildTeam(employeeArr) {
    if (!employeeArr) {
        employeeArr = [];
    }

    promptRole()
        .then(answer => {
            if (answer.role === 'Manager') {
                promptManager()
                    .then(manager => {
                        employeeArr.push(manager);
                        promptAddMore()
                            .then(answer => {
                                if (answer.confirmAddMore) {
                                    buildTeam(employeeArr);
                                } else {
                                    console.log(employeeArr);
                                    return employeeArr;
                                }
                            });
                    })
            } 
            else if (answer.role === 'Engineer') {
                promptEngineer()
                    .then(engineer => {
                        employeeArr.push(engineer)
                        promptAddMore()
                            .then(answer => {
                                if (answer.confirmAddMore) {
                                    buildTeam(employeeArr);
                                } else {
                                    console.log(employeeArr);
                                    return employeeArr;
                                }
                            });
                    });
            }
            else if (answer.role === 'Intern') {
                promptIntern()
                    .then(intern => {
                        employeeArr.push(intern);
                        promptAddMore()
                            .then(answer => {
                                if (answer.confirmAddMore) {
                                    buildTeam(employeeArr);
                                } else {
                                    console.log(employeeArr);
                                    return employeeArr
                                }
                            });
                    });
            }
        });


        // .then(employeeArr => {
        //     promptAddMore()
        //         .then(choice => {
        //             if (choice.confirmAddMore) {
        //                 buildTeam()
        //             } else {
        //                 console.log(employeeArr);
        //                 return employeeArr;
        //             }
        //         });
        // });
}

module.exports = buildTeam;