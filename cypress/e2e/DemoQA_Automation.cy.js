describe('Testing DemoQA', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    beforeEach(function () {
        // executes prior each test within it block
        cy.viewport(1224, 1068);
        cy.visit('https://demoqa.com/');
    })

    it('passes', () => {

      //for Text box
      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
      cy.get('#userName').type('Mujahid Akber Ali');
      cy.get('#userEmail').type('mujahidakberali@gmail.com');
      cy.get('#currentAddress').type('Karachi, Pakistan');
      cy.get('#permanentAddress').type('Karachi, Pakistan');
      cy.get('#submit').click();
        
      //For CheckBox
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
      cy.get('.rct-option-expand-all').click();
      cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox').click();
      cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3) > :nth-child(1) > label > .rct-checkbox').click();
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > label > .rct-checkbox').click();
      cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox').click();
      cy.get('.rct-option-collapse-all').click();

      cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click();
      cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)').click();

      cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click();
      cy.get('#addNewRecordButton').click();
      cy.get('#firstName').type('Mujahid');
      cy.get('#lastName').type('Akber Ali');
      cy.get('#userEmail').type('mujahidakberali@gmail.com');
      cy.get('#age').type('23');
      cy.get('#salary').type('25,000');
      cy.get('#department').type('SQA Trainee');

      cy.get('.close > [aria-hidden="true"]').click();

        cy.get(':nth-child(2) > .group-header > .header-wrapper').click({ force: true });
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click({force: true});
        cy.get('#firstName').type('Mujahid');
        cy.get('#lastName').type('Akber Ali');
        cy.get('#userEmail').type('mujahidakberali@gmail.com');
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
        cy.get('#userNumber').type('3132206219');

        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('1999');
        cy.get('.react-datepicker__month-select').select('October');
        cy.get(':nth-child(2) > .react-datepicker__day--005').click();


        cy.get('.subjects-auto-complete__value-container').type('maths');
        cy.wait(2000);
        cy.focused().tab(); 

        cy.wait(3000);

        cy.get('.subjects-auto-complete__value-container').click();
        cy.get('.subjects-auto-complete__value-container').type('physics');

        cy.focused().tab();
   
//        cy.get('.subjects-auto-complete__value-container').type('{enter}');

        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();

        cy.get('#uploadPicture').selectFile('C:\\Users\\aadil\\Desktop\\02.png');

        cy.get('#currentAddress').type('karachi, Pakistan');

        cy.get('#state > .css-yk16xz-control > .css-1hwfws3').type('NCR');
        cy.focused().tab(); 

        cy.get('#city > .css-yk16xz-control > .css-1hwfws3').type('Delhi');
        cy.focused().tab(); 

        cy.get('#submit').click();

    })

})