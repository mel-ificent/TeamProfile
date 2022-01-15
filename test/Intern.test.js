const Intern = require('../lib/Intern');

//Test that an intern's name is correctly returned
describe('getName', () => {


    it('Return an intern name', () => {
      const intern = new Intern('joe', 12345, 'joe@fakemail.com', 'ABC School');
      expect(intern.getName()).toEqual('joe');
    });
  
  });
  
  //Test that an intern's email is correctly returned
  describe('getEmail', () => {
  
  
      it('Return an intern email', () => {
        const intern = new Intern('joe', 12345, 'joe@fakemail.com', 'ABC School');
        expect(intern.getEmail()).toEqual('joe@fakemail.com');
      });
    
    });
  
    //Test that an intern's id is correctly returned
    describe('getId', () => {
  
  
      it('Return an intern id', () => {
        const intern = new Intern('joe', 12345, 'joe@fakemail.com', 'ABC School');
        expect(intern.getId()).toEqual(12345);
      });
    
    });
  
    //Test that an intern's role is correctly returned
    describe('getRole', () => {
  
  
      it('Return an manager id', () => {
        const intern = new Intern('joe', 12345, 'joe@fakemail.com', 'ABC School');
        expect(intern.getRole()).toEqual('Intern');
      });
    
    });

    //Test that an intern's school is correctly returned

    describe('getSchool', () => {
  
  
        it('Return an intern school', () => {
            const intern = new Intern('joe', 12345, 'joe@fakemail.com', 'ABC School');
          expect(intern.getSchool()).toEqual('ABC School');
        });
      
      });