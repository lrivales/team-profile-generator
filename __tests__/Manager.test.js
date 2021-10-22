const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Lawrence Rivales', 'id123','lrivales@company.org', '123-456-7890');
    
    expect(manager.phone).toBe('123-456-7890');
});

test('gets role', () => {
    const manager = new Manager('Lawrence Rivales', 'id123','lrivales@company.org', '123-456-7890');
    
    expect(manager.getRole()).toBe('Manager');
});