class SignupPage {

  constructor() {
    this.firstName = 'input[name=first_name]';
    this.lastName = 'input[name=last_name]';
    this.email = 'input[name=email]';
    this.password = '#password';
    this.regButton = 'button[type=submit]';
  }
  visit() {
    cy.visit('http://localhost/user-management-system/register.php');
  }

  fillFirstName(firstName) {
    cy.get(this.firstName).type(firstName);
  }

  fillLastNname(lastName) {
    cy.get(this.lastName).type(lastName);
  }

  fillEmail(email) {
    cy.get(this.email).type(email);
  }

  fillPassword(password) {
    cy.get(this.password).type(password);
  }

  submit() {
    cy.get(this.regButton).click();
  }

  verifyRegistration() {
    cy.get('.info').should('have.text', "Congratulations! Now you are a member")
  }
}

export default SignupPage;
