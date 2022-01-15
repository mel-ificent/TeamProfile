const Engineer = require('../lib/Engineer');

describe('getName', () => {


    it('Return an engineer name', () => {
      const engineer = new Engineer('joe', 12345, 'joe@fakemail.com', 'username');
      expect(engineer.getName()).toEqual('joe');
    });
  
  });
  
  
  describe('getEmail', () => {
  
  
      it('Return an engineer email', () => {
        const engineer = new Engineer('joe', 12345, 'joe@fakemail.com', 'username');
        expect(engineer.getEmail()).toEqual('joe@fakemail.com');
      });
    
    });
  
    describe('getId', () => {
  
  
      it('Return an engineer id', () => {
        const engineer = new Engineer('joe', 12345, 'joe@fakemail.com', 'username');
        expect(engineer.getId()).toEqual(12345);
      });
    
    });
  
    describe('getRole', () => {
  
  
      it('Return an engineer role', () => {
        const engineer = new Engineer('joe', 12345, 'joe@fakemail.com', 'username');
        expect(engineer.getRole()).toEqual('Engineer');
      });
    
    });

    describe('getGitHub', () => {
  
  
        it('Return engineer github username', () => {
            const engineer = new Engineer('joe', 12345, 'joe@fakemail.com', 'username');
          expect(engineer.getGitHub()).toEqual('username');
        });
      
      });