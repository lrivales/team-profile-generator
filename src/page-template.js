function generateHtml(data) {
    return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="spectre.min.css">
            <title>${data.team}</title>
        </head>

        <body>
            <div class="hero bg-gray">
                <div class="hero-body">
                    <h1>${data.team}</h1>
                </div>
            </div>

            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title h5">${data.name}</div>
                                <div class="card-subtitle text-gray">${data.role}</div>
                            </div>
                            <div class="card-body">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="active">
                                            <td>${data.id}</td>
                                            <td>${data.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>

        </html>
    `
}

module.exports = generateHtml;