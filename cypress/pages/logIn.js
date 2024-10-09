export class LogIn {

    username = '#username'; //div for username
    password = '#password'; //div for password
    log_in_btn = '.fa'; //element for log out button
    log_out_btn = '.icon-2x'; //element for log out button
    flash_msg = '#flash'; //div displaying a message


    //get username field and type username
    valid_username(user) {
        cy.get(this.username).type(user);
    }

    //get password field and type password
    valid_password(pass) {
        cy.get(this.password).type(pass);
    }

    //click on log in button 
    click_log_in_btn() {
        cy.get(this.log_in_btn).click();
    }

    //check the text on top of the page to validate if user is logged in
    log_in_assertion() {
        cy.get(this.flash_msg).should('contain', 'You logged into a secure area!');
    }


    //clock log out button
    click_log_out_btn() {
        cy.get(this.log_out_btn).click();
    }

    //after succesfull log out, check if correct message is displayed 
    log_out_assertion() {
        cy.get(this.flash_msg).should('contain', 'You logged out of the secure area!')
    }

    //check if correct message is displayed if username or password are incorrect
    invalid_msg_assertion() {
        cy.get(this.flash_msg).should('contain', 'Your username is invalid!')
    }

}