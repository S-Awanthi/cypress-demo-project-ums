import LoginPage from '../support/page_objects/loginPage';

describe('Login Tests', () => {
  
  const loginPage = new LoginPage();

  it('should log in successfully', () => {
    loginPage.visit();
    loginPage.fillEmail('john@yahoo.com');
    loginPage.fillPassword('abc123');
    loginPage.submit();
    loginPage.verifyLogin();
    
  });
});
