// import employee constructor
const Employee = require('./Employee')
// manager constructor adds on top of employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // call for employee constructor
        super (name, id, email); 

        this.officeNumber = officeNumber; 
    }
    // change employee role to manager 
    getRole () {
        return "Manager"
    }
} 
// export
module.exports = Manager; 