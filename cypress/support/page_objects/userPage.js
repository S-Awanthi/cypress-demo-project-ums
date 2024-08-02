class UserPage {

    constructor() {
        this.firstName = 'input[name="first_name"]';
        this.lastName = 'input[name="last_name"]';
        this.email = 'input[name="email"]';
        this.password = '#password';
        this.addUserButtonLink = '#add-userbtn';
        this.addUserButton = '#add-user-btn';

        this.editButtonLink = '#editbtn';
        this.editButton = '#update-btn';

        this.editPwordLink = '#changepword';
        this.editPwordButton = '#update-pword-btn';
        this.newPassword = '#new-password';

        this.deleteButtonLink = '#deletebtn';
        this.backToUserLink = '#back-list';
        this.alertField = '.info';
    }

    visit() {
        cy.visit('http://localhost/user-management-system/users.php');
    }

    createUser(firstName, lastName, email, password) {
        cy.get(this.addUserButtonLink).click();
        cy.get(this.firstName).type(firstName);
        cy.get(this.lastName).type(lastName);
        cy.get(this.email).type(email);
        cy.get(this.password).type(password);
        cy.get(this.addUserButton).click();
    }

    verifyCreateUser() {
        cy.get('.info').should('have.text', "User has been added successfully");
    }

    editUser(email, newFirstName, newLastName, newEmail) {
        cy.contains('td', email).parent('tr').find(this.editButtonLink).click();
        cy.get(this.firstName).clear().type(newFirstName);
        cy.get(this.lastName).clear().type(newLastName);
        cy.get(this.email).clear().type(newEmail);
        cy.get(this.editButton).click();
    }

    verifyEditUser() {
        cy.get(this.alertField).should('have.text', "User has been updated successfully");
        cy.get(this.backToUserLink).click(); //Back to user list
    }

    editPassword(email, newPassword) {
        cy.contains('td', email).parent('tr').find(this.editButtonLink).click();
        cy.get(this.editPwordLink).click();
        cy.get(this.newPassword).clear().type(newPassword);
        cy.get(this.editPwordButton).click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Are you sure want to change the password?');
        });
        cy.on('window:confirm', () => true);
        // cy.on('window:confirm', () => false); // This will click 'Cancel'               
    }

    verifyEditPassword() {
        cy.get(this.alertField).should('have.text', "Password has been changed successfully");
        cy.get(this.backToUserLink).click();
    }

    deleteUser(email) {
        cy.contains('td', email).parent('tr').find(this.deleteButtonLink).click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Are you sure want to delete this user?');
        });
        cy.on('window:confirm', () => true);
        //    cy.on('window:confirm', () => false); // This will click 'Cancel'
    }

    verifyDeleteUser() {
        cy.contains('user.two@example.com').should('not.exist');
        cy.url().should('include', "/users.php?msg=user_deleted");
    }
}

export default UserPage;
