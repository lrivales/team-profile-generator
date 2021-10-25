const generateHTML = (team) => {
   
// map through and if they have a constructor name of manager then return html
    let cards = team.map((employee) => {
        if (employee.constructor.name === "Manager") {
            return `<div class="card col-4" >
                        <h3>${employee.name}</h3>
                        <h4>Manager <i class="fas fa-mug-hot"></i> </h4>
                        <ul>
                            <li>ID: ${employee.id}</li>
                            <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li>Office Number: ${employee.officeNumber}</li>
                        </ul>
                    </div>`
        }
    // map through and if they have a constructor name of engineer then return html
        else if (employee.constructor.name === "Engineer") {
            return `<div class="card col-4">
                        <h3>${employee.name}</h3>
                        <h4>Engineer <i class="fas fa-glasses"></i> </h4>
                        <ul>
                            <li>ID: ${employee.id}</li>
                            <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li>GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
                        </ul>
                    </div>`
        }
    // map through and if they have a constructor name of intern then return html
        else if (employee.constructor.name === "Intern") {
            return `<div class="card col-4">
                        <h3>${employee.name}</h3>
                        <h4>Intern <i class="fas fa-user-graduate"></i> </h4>
                        <ul>
                            <li>ID: ${employee.id}</li>
                            <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li>School: ${employee.school}</li>
                        </ul>
                    </div>`
        }
    })

    // create HTML output to pass back to return
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="./styles.css"> 
        <title>Document</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                ${cards.join('')}
            </div>
        </div>
    </body>`

    return html;
}

module.exports = generateHTML;

