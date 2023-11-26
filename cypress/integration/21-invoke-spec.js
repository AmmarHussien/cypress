/// <reference types="cypress" />

it('invoke command', ()=>{

    const student = {
        name : 'Ammar',
        family: 'Hussien',
        isQA: true,
        isWatching: function(){
            return 'Hello ' + this.name
        }
    }

    cy.visit('cypress/index.html')

    cy.wrap(student)
    .invoke('isWatching')
    .should('contain', 'Ammar')
})