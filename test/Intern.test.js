const Intern = require('../lib/Intern');

describe('getName', () => {


    it('Return an intern name', () => {
      const intern = new Intern('joe', 12345, 'joe@fakemail.com', 'ABC School');
      expect(intern.getName()).toEqual('joe');
    });
  
  });
  
  
  describe('getEmail', () => {
  
  
      it('Return an intern email', () => {
        const intern = new Intern('joe', 12345, 'joe@fakemail.com', 'ABC School');
        expect(intern.getEmail()).toEqual('joe@fakemail.com');
      });
    
    });
  
    describe('getId', () => {
  
  
      it('Return an intern id', () => {
        const intern = new Intern('joe', 12345, 'joe@fakemail.com', 'ABC School');
        expect(intern.getId()).toEqual(12345);
      });
    
    });
  
    describe('getRole', () => {
  
  
      it('Return an manager id', () => {
        const intern = new Intern('joe', 12345, 'joe@fakemail.com', 'ABC School');
        expect(intern.getRole()).toEqual('Intern');
      });
    
    });

    describe('getSchool', () => {
  
  
        it('Return an intern school', () => {
            const intern = new Intern('joe', 12345, 'joe@fakemail.com', 'ABC School');
          expect(intern.getSchool()).toEqual('ABC School');
        });
      
      });