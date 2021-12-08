// manager constructor
const Manager = require('../library/Manager');

// create manager object
test('create manager object', () => {
    const manager = new Manager('Carter', 01, 'cartersupple123@gmail.com', 02);
    expect(manager.officeNumber) .toEqual(expect.any(Number));
});

// get role from getRole
test('get role of employee', () => {
const manager = new Manager ('Carter', 01, 'cartersupple123@gmail.com');
expect(manager.getRole()).toEqual("Manager");
});