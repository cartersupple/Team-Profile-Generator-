// link to where html will populate
const generatePage = require('./dist/index.html')

// employed profiles
const Manager = require('./library/Manager');
const Engineer= require('./library/Engineer');
const Intern = require('./library/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer')

const teamArray = [];

const managerInfo = () => {
    return inquirer.prompt([
            {
                type: "input",
                message: "Please enter the manager's name.",
                name: "name",
            },
            {
                type: "input",
                message: "Enter the manager's id.",
                name: "id",
            },
            {
                type: "input",
                message: "Enter the manager's email.",
                name: "email",
            },
            {
                type: "input",
                message: "Enter the manager's office number.",
                name: "officeNumber",
            },
        ])
        .then(response => {
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                teamArray.push(manager);
        })
    };


const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Please select employee's job title or selected finished if complete.",
            name: "role",
            choices: [
                "Engineer",
                "Intern",
                "Finished adding employees"
            ]
        },

        {
            message: "Enter the name of engineer.",
            name: "name",
            when: ({role}) => role === "Engineer"
        },

        {
            message: "Enter engineer's id.",
            name: "id",
            when: ({role}) => role === "Engineer"
        },

        {
            message: "Enter engineer's email adress.",
            name: "email",
            when: ({role}) => role === "Engineer"
        },

        {
            message: "Enter engineer's github username.",
            name: "github",
            when: ({role}) => role === "Engineer"
        },

        {
            message: "Enter intern's name.",
            name: "name",
            when: ({role}) => role === "Intern"
        },

        {
            message: "Enter intern's id.",
            name: "id",
            when: ({role}) => role === "Intern"
        },

        {
            message: "Enter intern's email adress.",
            name: "email",
            when: ({role}) => role === "Intern"
        },

        {
            message: "Enter intern's school.",
            name: "school",
            when: ({role}) => role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Are there more employees to add?',
            default: false
        }
    ])
   
    .then(response => {

        switch (response.role) {
            case "Engineer":
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                teamArray.push(engineer);
                break;
            case "Intern":
                const intern = new Intern(response.name, response.id, response.email, response.school);
                teamArray.push(intern);
                break;
        }
        if (response.confirmAddEmployee){
            return addEmployee()
        }

    })
}

managerInfo()
.then(addEmployee)
.then(() => generatePage(teamArray))

.then(pageHTML => {
    console.log(teamArray)
    return writeFile(pageHTML);
  })
.catch(err => {
    console.log(err);
  });


const writeFile = fileContent =>{
    return new Promise((resolve, reject)=>{
        fs.writeFile('./dist/index.html', fileContent, err =>{
            if(err){
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'Page created!'
            })
        })
    });
};

