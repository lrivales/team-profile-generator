const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Lawrence Rivales', 'id123','lrivales@company.org', 'lrivales');
    
    expect(engineer.github).toBe('lrivales');
});

test('gets github', () => {
    const engineer = new Engineer('Lawrence Rivales', 'id123','lrivales@company.org', 'lrivales');
    
    expect(engineer.getGithub()).toBe('lrivales');
});

test('gets role', () => {
    const engineer = new Engineer('Lawrence Rivales', 'id123','lrivales@company.org', 'lrivales');
    
    expect(engineer.getRole()).toBe('Engineer');
});