// Engineer constructor 
const Engineer = require('../library/Engineer');

// engineer object  
test('create Engineer object', () => {
    const engineer = new Engineer('Carter', 01, 'cartersupple123@gmail.com', 'cartersupple');
    expect(engineer.github) .toEqual(expect.any(String));
});

// get github from getGithub()
test('get engineer github', () => {
    const engineer = new Engineer('Carter', 01, 'cartersupple123@gmail.com', 'cartersupple');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// get role from getRole() 
test('get role of employee', () => {
    const engineer = new Engineer('Carter', 01, 'cartersupple123@gmail.com', 'cartersupple');
    expect(engineer.getRole()).toEqual("Engineer");
});