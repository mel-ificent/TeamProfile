const Manager = require('../lib/Manager');

//Test that an manager's name is correctly returned
describe('getName', () => {


    it('Return a manager name', () => {
      const manager = new Manager('joe', 12345, 'joe@fakemail.com', '555-555-5555');
      expect(manager.getName()).toEqual('joe');
    });
  
  });
  
  //Test that an manager's email is correctly returned
  describe('getEmail', () => {
  
  
      it('Return a manager email', () => {
        const manager = new Manager('joe', 12345, 'joe@fakemail.com', '555-555-5555');
        expect(manager.getEmail()).toEqual('joe@fakemail.com');
      });
    
    });
  
    //Test that an manager's id is correctly returned
    describe('getId', () => {
  
  
      it('Return a manager id', () => {
        const manager = new Manager('joe', 12345, 'joe@fakemail.com', '555-555-5555');
        expect(manager.getId()).toEqual(12345);
      });
    
    });
  
    //Test that an manager's role is correctly returned
    describe('getRole', () => {
  
  
      it('Return a manager id', () => {
        const manager = new Manager('joe', 12345, 'joe@fakemail.com', '555-555-5555');
        expect(manager.getRole()).toEqual('Manager');
      });
    
    });

    //Test that an manager's office number is correctly returned
    describe('getNumber', () => {
  
  
        it('Return manager phone number', () => {
          const manager = new Manager('joe', 12345, 'joe@fakemail.com', '555-555-5555');
          expect(manager.getNumber()).toEqual('555-555-5555');
        });
      
      });