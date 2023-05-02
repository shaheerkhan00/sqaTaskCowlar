import 'cypress-file-upload';

describe('Automation Practice Form Test', () => {
  it('should fill the form and submit successfully', () => {
    cy.visit('https://demoqa.com/automation-practice-form')

    // Fill out the form fields
    cy.get('#firstName').type('Cowlar')
    cy.get('#lastName').type('Developer')
    cy.get('#userEmail').type('qaengineer@cowlar.com')
    cy.get("label[for='gender-radio-1']").click();
    cy.get('#userNumber').type('0123456789')
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select('February')
    cy.get('.react-datepicker__year-select').select('1995')
    cy.get('.react-datepicker__day--019').click()
    cy.get('#subjectsInput').type('Computer Science').type('{enter}')
    cy.get("label[for='hobbies-checkbox-3']").click();
    cy.get('#currentAddress').type('Addres 1')
    cy.get('#state').click()
    cy.get('#react-select-3-input').type('NCR').type('{enter}')
    cy.get('#city').click()
    cy.get('#react-select-4-input').type('Delhi').type('{enter}')
    cy.get('#uploadPicture').attachFile('person.png')

    // Verify the form fields
    cy.get('#firstName').should('have.value', 'Cowlar')
    cy.get('#lastName').should('have.value', 'Developer')
    cy.get('#userEmail').should('have.value', 'qaengineer@cowlar.com')
    cy.get("input[name='gender']:checked").should('have.value', 'Male')
    cy.get('#userNumber').should('have.value', '0123456789')
    cy.get('#dateOfBirthInput').should('have.value', '19 Feb 1995')
    cy.get('#currentAddress').should('have.value', 'Addres 1')
    cy.get('.subjects-auto-complete__multi-value__label').should('have.text', 'Computer Science')
    cy.get('#hobbies-checkbox-3').should('be.checked')

    cy.get('#state .css-1uccc91-singleValue').should('have.text', 'NCR')
    cy.get('#city .css-1uccc91-singleValue').should('have.text', 'Delhi')

    // Submit the form
    cy.get('#submit').click()

    // Verify the form submission
    cy.get('#example-modal-sizes-title-lg')
      .should('be.visible')
      .and('contain', 'Thanks for submitting the form')

    cy.get('#closeLargeModal').click()
  })
})
