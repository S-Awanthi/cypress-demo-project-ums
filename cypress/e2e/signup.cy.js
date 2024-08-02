import SignupPage from '../support/page_objects/signupPage';

describe('Signup Tests', () => {

  const signupPage = new SignupPage();

  it('should sign up successfully', () => {
    signupPage.visit();
    signupPage.fillFirstName('John');
    signupPage.fillLastNname('Doe');
    signupPage.fillEmail('john@yahoo.com');
    signupPage.fillPassword('abc123');
    signupPage.submit();
    signupPage.verifyRegistration();   
    
  });
});
