// import employee constructor
const Employee = require('./Employee')
// intern constructor adds on top of employee constructor
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // call for employee constructor
        super (name, id, email); 

        this.school = school; 
    }
    // return school
    getSchool () {
        return this.school;
    }
    // change employee role to intern
    getRole () {
        return "Intern"
    }
} 
// export
module.exports = Intern; 