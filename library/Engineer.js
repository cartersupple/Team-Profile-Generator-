// import employee constructor 
const Employee = require('./Employee')
// engineer constructor adds on top of employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // call for employee constructor 
        super (name, id, email);
        this.github = github; 
    }
    // return github
    getGithub () {
        return this.github;
    }
     // change employee role to engineer
    getRole () {
        return "Engineer"
    }
}
// export
module.exports = Engineer;