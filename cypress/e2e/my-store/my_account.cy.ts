/// <reference types="cypress" />

    import myaccountpage=require ("../../page-objects/my_account.page")

    import loginpage = require ("../../page-objects/login.page")



describe ('My account page test', ()=> {

    beforeEach(()=>{

        loginpage.homepageStart();

        loginpage.login ('peradetlic095@gmail.com', '12345');

        myaccountpage.elements.myAccountPage();

    })

    it('should be able to change address', ()=>{

        myaccountpage.elements.myAddressesButton().click();
        myaccountpage.elements.updateButton().click();
        myaccountpage.elements.myAddress1Field().clear().type('Svetosavska');
        myaccountpage.elements.submitAddressButton().click();
        myaccountpage.elements.backToMyAccountButton().click();
        myaccountpage.elements.myAddressesButton().click();
        myaccountpage.elements.personalInformationList().should('contain', 'Svetosavska')

    })


    it('should be able to delete address', ()=>{
        myaccountpage.elements.myAddressesButton().click();
        myaccountpage.elements.myAddressDeleteButton().click();

        myaccountpage.elements.messageField().should('contain', 'No addresses are available')
        
        myaccountpage.elements.addNewAddress().click();
        myaccountpage.elements.myAddress1Field().type('Svetosavska');
        myaccountpage.elements.cityField().type('Novi Sad');
        myaccountpage.elements.countryField().select('Arizona');
        myaccountpage.elements.postalCodeField().type('21000');
        myaccountpage.elements.mobilePhoneField().type('123456789');
        myaccountpage.elements.submitAddressButton().click();
        myaccountpage.elements.backToMyAccountButton().click();

        myaccountpage.elements.myAddressesButton().click();
        myaccountpage.elements.personalInformationList().should('contain', 'Svetosavska')

    })

    it('should change first name, last name and password', ()=>{

        myaccountpage.changePersonalInformation('Milica', 'Krajisnik', '12345', '98765', '98765');

        myaccountpage.elements.singOutButton().click();

        loginpage.login ('peradetlic095@gmail.com', '98765');

        myaccountpage.changePersonalInformation('Milica', 'Krajisnik', '98765', '12345', '12345');

        myaccountpage.elements.messageField().should('contain', 'Your personal information has been successfully updated')
        
    })

})