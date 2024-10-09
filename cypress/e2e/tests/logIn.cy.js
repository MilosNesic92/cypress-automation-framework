import { LogIn } from "../../pages/logIn";

const logIn = new LogIn();

describe('Log In - Valid and Invalid tests', () => {

    beforeEach(() => {
        cy.visit('/login');
    });

    it('Log In using Valid Credentials', () => {

        cy.fixture('userData').then((data) => {

            logIn.valid_username(data.username); //tomsith
            logIn.valid_password(data.password); //SuperSecretPassword!

        })

        logIn.click_log_in_btn();
        logIn.log_in_assertion();
        logIn.click_log_out_btn();
        logIn.log_out_assertion();

    });

    it('Try to log in using Invalid Credentials', () => {

        cy.fixture('userData').then((data) => {

            logIn.valid_username(data.invalid_username);
            logIn.valid_password(data.invalid_password);

        })

        logIn.click_log_in_btn();
        logIn.invalid_msg_assertion();

    });

});