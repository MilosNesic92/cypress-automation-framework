export class Checkboxes {


    //get input element 
    checkbox_input = 'input';

    //get first checkbox
    checkbox_one() {
        cy.get(this.checkbox_input).eq(0).check().should('be.checked');
    }

    //get second checkbox
    checkbox_two() {
        cy.get(this.checkbox_input).eq(1).uncheck().should('not.be.checked');
    }

}


