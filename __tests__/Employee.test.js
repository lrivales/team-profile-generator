const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Lawrence Rivales', 'id123','lrivales@company.org',)

    expect(employee.name).toBe('Lawrence Rivales');
    expect(employee.id).toBeTruthy();
    expect(employee.email).toBe('lrivales@company.org');
});

test('gets employee name', () => {
    const employee = new Employee('Lawrence Rivales', 'id123','lrivales@company.org',)

    expect(employee.getName()).toBe('Lawrence Rivales');
});

test('gets employee email', () => {
    const employee = new Employee('Lawrence Rivales', 'id123','lrivales@company.org',)

    expect(employee.getEmail()).toBe('lrivales@company.org');
});

test('gets employee role', () => {
    const employee = new Employee('Lawrence Rivales', 'id123','lrivales@company.org',)

    expect(employee.getRole()).toBe('Employee');
})