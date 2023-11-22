/// <reference types="cypress" />

// describe, context is for grouping 




describe('test case group 1', function() {

    before(()=>{
        //i will execute only one time before all test cases 
    
        cy.log('before hook')
    })
    beforeEach(()=>{
        //i will execute every time before all test cases 
        cy.log('before each hook')
    })
    
    after(()=>{
        //i will execute only one time after all test cases 
        cy.log('after hook')
    })
    afterEach(()=>{
        //i will execute every time after all test cases 
        cy.log('after each hook')
    
    })
    
    it('test case 1', function() {
        cy.log('test case 1')
    })
    
    it('test case 1.1', function() {
        cy.log('test case 1.1')
    })
    
    it('test case 1.2', function() {
        cy.log('test case 1.2')
    })
})

context('test case group 2', function() {
    it('test case 2', function() {
        cy.log('test case 2')
    })
    it('test case 2.1', function() {
        cy.log('test case 2.1')
    })
    it('test case 2.2', function() {
        cy.log('test case 2.2')
    })
})
