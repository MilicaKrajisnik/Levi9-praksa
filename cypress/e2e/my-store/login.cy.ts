/// <reference types="cypress" />

import loginpage=require('../../page-objects/login.page')

describe('Login Test', ()=> {

    beforeEach(() => {
        
    cy.visit('')
    loginpage.elements.loginButton().click()

      })

it('login test with valid email and password', () => {

    login ('peradetlic095@gmail.com', "98765")

    cy.get('.logout').should('contain', 'Sign out')
    cy.get('.account > span').should('contain', 'Petar Perovic')
    cy.get(':nth-child(1) > .myaccount-link-list > :nth-child(1) > a > span').should('contain', 'Order history and details')
    cy.get('.myaccount-link-list > :nth-child(2) > a > span').should('contain', 'My credit slips')
    cy.get('.myaccount-link-list > :nth-child(3) > a > span').should('contain', 'My addresses')
    cy.get('.myaccount-link-list > :nth-child(4) > a > span').should('contain', 'My personal information')
    cy.get('.lnk_wishlist > a > span').should('contain', 'My wishlists')
    })


it('login functionality test with unregistred email', function() {

    login ('milica@gmail', '98765')

    cy.get('#center_column > :nth-child(2)')
    cy.get('ol > li').should('contain', 'Invalid email address')
})


it('login functionality test with valid email and invalid password', function(){
    
    login ('peradetlic095@gmail.com', '12345')

    cy.get('#center_column > :nth-child(2)')
    cy.get('ol > li').should('contain', 'Authentication failed')

})

it('login functionality test with leaving email field blank', function(){

    login ('  ', '12345')

    cy.get('#center_column > :nth-child(2)')
    cy.get('ol > li').should('contain', 'An email address required')

})

it('login functionality test with leaving password field blank', function(){

    login ('peradetlic095@gmail', ' ') 

    cy.get('#center_column > :nth-child(2)')

})


it('login functionality test with all fields blank', function(){

    cy.get('#SubmitLogin > span').click()

    cy.get('#center_column > :nth-child(2)')
    cy.get('ol > li').should('contain', 'An email address required')
})


it('login functionality test with unregistred email', function() {

    login ('abc@abc', '98765')

    cy.get('#center_column > :nth-child(2)')
    cy.get('ol > li').should('contain', 'Invalid email address')
})

});

function login (email:string, password:string) {
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin > span').click()
}
