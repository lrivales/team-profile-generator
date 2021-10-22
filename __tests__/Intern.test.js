const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Lawrence Rivales', 'id123','lrivales@company.org', 'GW University');
    
    expect(intern.school).toBe('GW University');
});

test('gets school', () => {
    const intern = new Intern('Lawrence Rivales', 'id123','lrivales@company.org', 'GW University');
    
    expect(intern.getSchool()).toBe('GW University');
});

test('gets role', () => {
    const intern = new Intern('Lawrence Rivales', 'id123','lrivales@company.org', 'GW University');
    
    expect(intern.getRole()).toBe('Intern');
});