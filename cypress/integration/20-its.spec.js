/// <reference types="cypress" />

it('its command', ()=>{

    const student = {
        name : 'Ammar',
        family: 'Hussien',
        isQA: true,
        isWatching: function(){
            console.log('he is watching')
        }
    }

    cy.visit('cypress/index.html')

    cy.wrap(student).its('family').should('eql', 'Hussien')
})