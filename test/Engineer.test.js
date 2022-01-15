const Engineer = require('../lib/Engineer');

//Test that an engineer's name is correctly returned
describe('getName', () => {


    it('Return an engineer name', () => {
      const engineer = new Engineer('joe', 12345, 'joe@fakemail.com', 'username');
      expect(engineer.getName()).toEqual('joe');
    });
  
  });
  
  //Test that an engineer's email is correctly returned
  describe('getEmail', () => {
  
  
      it('Return an engineer email', () => {
        const engineer = new Engineer('joe', 12345, 'joe@fakemail.com', 'username');
        expect(engineer.getEmail()).toEqual('joe@fakemail.com');
      });
    
    });
  
    //Test that an engineer's id is correctly returned
    describe('getId', () => {
  
  
      it('Return an engineer id', () => {
        const engineer = new Engineer('joe', 12345, 'joe@fakemail.com', 'username');
        expect(engineer.getId()).toEqual(12345);
      });
    
    });
  
    //Test that an engineer's role is correctly returned
    describe('getRole', () => {
  
  
      it('Return an engineer role', () => {
        const engineer = new Engineer('joe', 12345, 'joe@fakemail.com', 'username');
        expect(engineer.getRole()).toEqual('Engineer');
      });
    
    });

    //Test that an engineer's GitHub user name is correctly returned
    describe('getGitHub', () => {
  
  
        it('Return engineer github username', () => {
            const engineer = new Engineer('joe', 12345, 'joe@fakemail.com', 'username');
          expect(engineer.getGitHub()).toEqual('username');
        });
      
      });