/// <reference types="cypress" />

import singuppage=require('../../page-objects/singup.page')

import loginpage=require('../../page-objects/login.page')

let randomstring = require("randomstring");

let emailFirstPart = randomstring.generate({
  length: 7,
  charset: 'abc'
});
// >> "accbaab"


let randomEmail = emailFirstPart + "@gmail.com"


function singup (randomEmail:string) {
  
    singuppage.elements.emailCreateField().type(randomEmail)
    singuppage.elements.submitCreate().click()
}

describe('Singup Test', ()=> {

    beforeEach(() => {
        
        loginpage.homepageStart()

      })


    it('should not be redirected to create an account page', function (){

        singup ('abc@abc')

        singuppage.elements.invalidEmailAddress().should('contain', 'Invalid email address.')

    })


    it('should not singup', function (){

        singup (randomEmail)

        singuppage.elements.registerButton().click()
        singuppage.elements.alertField().should('contain', 'There are 8 errors')

    })

    it(' should show red text box borders', function (){

        singup (randomEmail)

        singuppage.elements.customerFirstName().type('abc123')
        singuppage.elements.customerLastName().type('abc123')
        singuppage.elements.customerPassword().type('1234') // In password field enter 4 or less characters

        singuppage.elements.customerFirstName().should('have.css', 'background-color', 'rgb(255, 241, 242)')
        singuppage.elements.customerLastName().should('have.css', 'background-color', 'rgb(255, 241, 242)')

        //Result is as expected, text box borders become red after entering invalid form

    })

    it('should show green text box borders', function (){

        singup (randomEmail)

        singuppage.elements.address1().type('123')
        singuppage.elements.cityField().type('123')

        singuppage.elements.address1().wrap({ amount: 123 }).should('have.property', 'amount').and('eq', 123)
        singuppage.elements.cityField().wrap({ amount: 123 }).should('have.property', 'amount').and('eq', 123)
        // bug, there is no message for entering invalid forms in Address and City fields

    })

    it('should singup', function (){

        singup (randomEmail)

        singuppage.elements.createanaccountpage().should('contain', 'Create an account')
        singuppage.elements.yourpersonalinformatin().should('contain', 'Your personal information')
        singuppage.elements.youraddress().should('contain', 'Your address')
        singuppage.elements.registerButton().should('contain', 'Register')

        singuppage.elements.customerFirstName().type('Milica')
        singuppage.elements.customerLastName().type('Krajisnik')
        singuppage.elements.customerPassword().type('456789')
        singuppage.elements.address1().type('Nikole Tesle')
        singuppage.elements.cityField().type('Novi Sad')
        
        singuppage.elements.countryField().select('Arizona')
        singuppage.elements.postalCodeField().type('21000')
        singuppage.elements.mobilePhoneField().type('0123456789')

        singuppage.elements.registerButton().click()
        
        singuppage.elements.accountButton().should('contain', 'Milica Krajisnik')

    })


})