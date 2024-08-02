class LoginPage {

    constructor() {
        this.emailField = '#login-email';
        this.passwordField = '#login-pword';
        this.loginButton = 'button[type="submit"]';
        //   this.loginButton = '#loginbtn'; 
    }

    visit() {
        cy.visit('http://localhost/user-management-system/index.php');
    }

    fillEmail(email) {
        cy.get(this.emailField).type(email);
    }

    fillPassword(password) {
        cy.get(this.passwordField).type(password);
    }

    submit() {
        cy.get(this.loginButton).click();
    }

    verifyLogin() {
        cy.url().should('include', '/users.php');
        cy.get('#logout-btn').should('be.visible');
    }
}

export default LoginPage;
