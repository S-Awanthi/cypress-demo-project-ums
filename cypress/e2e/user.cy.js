import LoginPage from '../support/page_objects/loginPage';
import UserPage from '../support/page_objects/userPage';

describe('User Management Tests', () => {
  const loginPage = new LoginPage();
  const userPage = new UserPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.fillEmail('john@yahoo.com');
    loginPage.fillPassword('abc123');
    loginPage.submit();
    loginPage.verifyLogin();
  });

  describe('All Tests', () => {
    beforeEach(() => {
      userPage.visit();
    });

    it('should create a new user', () => {      
      userPage.createUser('Test', 'User One', 'user.one@example.com', 'test01');
      userPage.verifyCreateUser();      
    });

    it('should create a new user', () => {
      userPage.createUser('Test', 'User Two', 'user.two@example.com', 'test02');
      userPage.verifyCreateUser();
    });

    it('should edit an existing user details', () => {
      userPage.editUser('user.one@example.com', 'Test Edited', 'User Three', 'user.three@example.com');
      userPage.verifyEditUser();    
    });

    it('should change password', () => {
      userPage.editPassword('user.three@example.com', 'test03');
      userPage.verifyEditPassword();
    });

    it('should delete an existing user', () => {
      userPage.deleteUser('user.two@example.com');
      userPage.verifyDeleteUser();
    });
  });

})
