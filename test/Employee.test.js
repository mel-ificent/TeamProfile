const Employee = require('../lib/Employee');

//Test that an employee's name is correctly returned
describe('getName', () => {


  it('Return an employee name', () => {
    const employee = new Employee('joe', 12345, 'joe@fakemail.com');
    expect(employee.getName()).toEqual('joe');
  });

});

//Test that an employee's email is correctly returned
describe('getEmail', () => {


    it('Return an employee email', () => {
      const employee = new Employee('joe', 12345, 'joe@fakemail.com');
      expect(employee.getEmail()).toEqual('joe@fakemail.com');
    });
  
  });

  //Test that an employee's id is correctly returned
  describe('getId', () => {


    it('Return an employee id', () => {
      const employee = new Employee('joe', 12345, 'joe@fakemail.com');
      expect(employee.getId()).toEqual(12345);
    });
  
  });

  //Test that an employee's role is correctly returned
  describe('getRole', () => {


    it('Return an employee id', () => {
      const employee = new Employee('joe', 12345, 'joe@fakemail.com');
      expect(employee.getRole()).toEqual('Employee');
    });
  
  });