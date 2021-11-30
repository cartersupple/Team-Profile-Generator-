//  employee constructor
const employee = require('../lib/employee');

// employee object 
test('create employee object', () => {
    const employee = new Employee('Carter', 01, 'cartersupple123@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// get id from getId() 
test('get employee ID', () => {
    const employee = new Employee('Carter', 01, 'cartersupple123@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// get email from getEmail()
test('get employee email', () => {
    const employee = new Employee('Carter', 01, 'cartersupple123@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
// get role from getRole() 
test('get role of employee', () => {
    const employee = new employee('Carter', 01, 'cartersupple123@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});