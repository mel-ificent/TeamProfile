const Manager = require('../lib/Manager');

describe('getName', () => {


    it('Return a manager name', () => {
      const manager = new Manager('joe', 12345, 'joe@fakemail.com', '555-555-5555');
      expect(manager.getName()).toEqual('joe');
    });
  
  });
  
  
  describe('getEmail', () => {
  
  
      it('Return a manager email', () => {
        const manager = new Manager('joe', 12345, 'joe@fakemail.com', '555-555-5555');
        expect(manager.getEmail()).toEqual('joe@fakemail.com');
      });
    
    });
  
    describe('getId', () => {
  
  
      it('Return a manager id', () => {
        const manager = new Manager('joe', 12345, 'joe@fakemail.com', '555-555-5555');
        expect(manager.getId()).toEqual(12345);
      });
    
    });
  
    describe('getRole', () => {
  
  
      it('Return a manager id', () => {
        const manager = new Manager('joe', 12345, 'joe@fakemail.com', '555-555-5555');
        expect(manager.getRole()).toEqual('Manager');
      });
    
    });

    describe('getNumber', () => {
  
  
        it('Return manager phone number', () => {
          const manager = new Manager('joe', 12345, 'joe@fakemail.com', '555-555-5555');
          expect(manager.getNumber()).toEqual('555-555-5555');
        });
      
      });