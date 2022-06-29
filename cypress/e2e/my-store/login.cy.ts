/// <reference types="cypress" />

import loginpage=require('../../page-objects/login.page')

describe('Login Test', ()=> {

    beforeEach(() => {
        
    loginpage.homepageStart()

      })

it('login test with valid email and password', () => {

    loginpage.login ('peradetlic095@gmail.com', "12345")

    loginpage.elements.logoutButton().should('contain', 'Sign out')
    loginpage.elements.orderHistoryAndDetailsButton().should('contain', 'Order history and details')
    loginpage.elements.myCreditSlipsButton().should('contain', 'My credit slips')
    loginpage.elements.myAddressesButton().should('contain', 'My addresses')
    loginpage.elements.myPersonalInformationButton().should('contain', 'My personal information')
    loginpage.elements.myWishListButton().should('contain', 'My wishlists')
    })


it('login functionality test with unregistred email', function() {

    loginpage.login ('milicaa@gmail', '98765')

    loginpage.elements.errorField()
    loginpage.elements.errorMessage().should('contain', 'Invalid email address')
})


it('login functionality test with valid email and invalid password', function(){
    
    loginpage.login ('peradetlic095@gmail.com', '45654')

    loginpage.elements.errorField()
    loginpage.elements.errorMessage().should('contain', 'Authentication failed')

})

it('login functionality test with leaving email field blank', function(){

    loginpage.login ('  ', '12345')

    loginpage.elements.errorField()
    loginpage.elements.errorMessage().should('contain', 'An email address required')

})

it('login functionality test with leaving password field blank', function(){

    loginpage.elements.emailField().type('peradetlic095@gmail.com'),
    loginpage.elements.submitLogin().click()

    loginpage.elements.errorField()
    loginpage.elements.errorMessage().should('contain', 'Password is required.')

})


it('login functionality test with all fields blank', function(){

    loginpage.elements.submitLogin().click()

    loginpage.elements.errorField().should('contain', 'An email address required')
    
})


it('login functionality test with unregistred email', function() {

    loginpage.login ('abc@abc', '12345')

    loginpage.elements.errorField()
    loginpage.elements.errorMessage().should('contain', 'Invalid email address')
})

});
