/// <reference types="cypress" />

import singuppage=require('../../page-objects/singup.page')

function singup (email:string){

    cy.get('#email_create').type(email)
    cy.get('#SubmitCreate > span').click()
}

describe('Singup Test', ()=> {

    beforeEach(() => {
        
    singuppage.elements.homepage()
    singuppage.elements.loginButton().click()

      })


    it('test singup functionality with invalid email domain', function (){

        singup ('abc@abc')

        cy.get('#create_account_error').should('contain', 'Invalid email address.')

    })


    it('test singup functionality without entering mandatory fields', function (){

        singup ('ljubica@gmail.com')

        cy.get('#submitAccount').click()
        cy.get('.alert').should('contain', 'There are 8 errors')

    })

    it(' should ***test first name, last name and password length validation', function (){

        singup ('ljubica@gmail.com')

        cy.get('#customer_firstname').type('abc123')
        cy.get('#customer_lastname').type('abc123')
        cy.get('#passwd').type('1234') // In password field enter 4 or less characters
        //Result is as expected, text box borders become red after entering invalid form

    })

    it('test first name, last name and password length validation', function (){

        singup ('ljubica@gmail.com')

        cy.get('#address1').type('123')
        cy.get('#city').type('123')
        // bug, there is no message for entering invalid forms in Address and City fields

    })

    it('user should singup', function (){

        singup ('ljubica@gmail.com')

        cy.get('.page-heading').should('contain', 'Create an account')
        cy.get('.page-subheading').should('contain', 'Your personal information')
        cy.get(':nth-child(2) > .page-subheading').should('contain', 'Your address')
        cy.get('#submitAccount').should('contain', 'Register')

        singuppage.elements.customerFirstName().type('Milica')
        singuppage.elements.customerLastName().type('Krajisnik')
        singuppage.elements.customerPassword().type('456789')
        singuppage.elements.address1().type('Nikole Tesle')
        singuppage.elements.cityField().type('Novi Sad')
        
        cy.get('#id_state').select('Arizona')
        cy.get('#postcode').type('21000')
        cy.get('#phone_mobile').type('0123456789')

        singuppage.elements.registerButton().click()
        
    })


})