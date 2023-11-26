/// <reference types="cypress" />

it('warp command', ()=>{

    const student = {
        name : 'Ammar',
        family: 'Hussien',
        isQA: true,
        isWatching: function(){
            console.log('he is watching')
        }
    }

    cy.visit('cypress/index.html')

    cy.wrap(student).should(
        "have.property",
        'name',
        "Ammar"
        )
})