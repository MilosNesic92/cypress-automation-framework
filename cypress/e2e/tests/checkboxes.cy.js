import { Checkboxes } from "../../pages/checkboxes";

const checkboxes = new Checkboxes();

describe('Verify Checkboxes', () => {

    beforeEach(() => {
        cy.visit('/checkboxes');
    });

    it('Check and Uncheck checkboxes', () => {

        checkboxes.checkbox_one();
        checkboxes.checkbox_two();

    });
    
});