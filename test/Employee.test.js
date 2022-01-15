const Employee = require('../lib/Employee');

describe('getName', () => {


  it('Return an employee name', () => {
    const employee = new Employee('joe', 12345, 'joe@fakemail.com');
    expect(employee.getName()).toEqual('joe');
  });

});


describe('getEmail', () => {


    it('Return an employee email', () => {
      const employee = new Employee('joe', 12345, 'joe@fakemail.com');
      expect(employee.getEmail()).toEqual('joe@fakemail.com');
    });
  
  });

  describe('getId', () => {


    it('Return an employee id', () => {
      const employee = new Employee('joe', 12345, 'joe@fakemail.com');
      expect(employee.getId()).toEqual(12345);
    });
  
  });

  describe('getRole', () => {


    it('Return an employee id', () => {
      const employee = new Employee('joe', 12345, 'joe@fakemail.com');
      expect(employee.getRole()).toEqual('Employee');
    });
  
  });