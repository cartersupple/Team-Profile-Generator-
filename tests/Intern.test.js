// Intern constructor 
const Intern = require('../library/Intern');

// create intern object  
test('create Intern object', () => {
    const intern = new Intern('Carter', 01, 'cartersupple123@gmail.com','UCB');
    expect(intern.school) .toEqual(expect.any(String));
});

// get school from getSchool
test('get employee school', () => {
    const intern = new Intern('Carter', 01, 'cartersupple123@gmail.com','UCB');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// get role from getRole
test('gets role of employee', () => {
    const intern = new Intern('Carter', 01, 'cartersupple123@gmail.com','UCB');
    expect(intern.getRole()).toEqual("Intern");
}); 