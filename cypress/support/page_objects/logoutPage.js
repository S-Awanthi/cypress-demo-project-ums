class LogoutPage {

  constructor() {
    this.logoutButton = '#logout-btn';
  }  

  clickLogout() {
    cy.get(this.logoutButton).click();
  }

  verifyLogout() {
    cy.url().should('include', '/index.php?logout=yes');
    cy.get('.info').should('be.visible');
  }

}

export default LogoutPage;
