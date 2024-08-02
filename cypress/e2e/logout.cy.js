import LogoutPage from "../support/page_objects/logoutPage";
import LoginPage from "../support/page_objects/loginPage";

describe('User Logout Tests', () => {

  const logoutPage = new LogoutPage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.fillEmail('john@yahoo.com');
    loginPage.fillPassword('abc123');
    loginPage.submit();
    loginPage.verifyLogin();
  });

  it('should log out successfully', () => {
    logoutPage.clickLogout();
    logoutPage.verifyLogout();
    
  });
});
