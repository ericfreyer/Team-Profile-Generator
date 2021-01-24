//Employee, Engineer, Intern, Technician
function mainPageLayout(){

}


function employeeCard(employee){
    return `<div>
    <h1>${employee.name}</h1>
    <h2>Employee id: ${employee.id}</h2>
    <h2>${employee.email}</h2>
            </div>`
}

function managerCard(manager){
    `<div>
    <h1>${manager.name}</h1>
    <h2>Employee id: ${manager.id}</h2>
    <h2> Office Number: ${manager.officeNumber}
    <h2>${manager.email}</h2>
            </div>`
}

function engineerCard(engineer){
    `<div>
    <h1>${engineer.name}</h1>
    <h2>Employee id: ${engineer.id}</h2>
    <h2>Git Hub Username: ${engineer.userName}</h2>
    <h2>${engineer.email}</h2>
            </div>`
}

function internCard(intern){
    `<div>
    <h1>${intern.name}</h1>
    <h2>Employee id: ${intern.id}</h2>
    <h2>School: ${intern.school}
    <h2>${intern.email}</h2>
            </div>`
}

module.exports = mainPageLayout;
module.exports = employeeCard;
module.exports = managerCard;
module.exports = engineerCard;
module.exports = internCard;