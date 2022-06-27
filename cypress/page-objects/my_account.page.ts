class MyAccountPage {
    elements = {
        
        myAccountPage: ()=> cy.get('#columns > :nth-child(3)'),
        myAddressesButton: ()=> cy.get('.myaccount-link-list > :nth-child(3)'),
        myAddressesPage: ()=> cy.get('.last_item'),
        updateButton: ()=> cy.contains('Update'),
        myAddress1Field: ()=> cy.get('#address1'),
        submitAddressButton: ()=> cy.get('#submitAddress > span'),
        myAddressDeleteButton: ()=> cy.contains('Delete'),
        addNewAddress: ()=> cy.get('.main-page-indent > .btn > span'),
        cityField: ()=> cy.get('#city'),
        countryField: ()=> cy.get('#id_state'),
        postalCodeField: ()=> cy.get('#postcode'),
        mobilePhoneField: ()=> cy.get('#phone_mobile'),
        backToMyAccountButton: ()=> cy.get('.footer_links > :nth-child(1) > .btn > span'),
        myPersonalInformationButton: ()=> cy.get('.myaccount-link-list > :nth-child(4)'),
        firstNameField: ()=> cy.get('#firstname'),
        lastNameField: ()=> cy.get('#lastname'),
        currentPassword: ()=> cy.get('#old_passwd'),
        newPassword: ()=> cy.get('#passwd'),
        confirmationField: ()=> cy.get('#confirmation'),
        personalInformationSubmitButton: ()=> cy.get(':nth-child(11) > .btn > span'),
        singOutButton: ()=> cy.get('.logout'),
        messageField: ()=>cy.get('.alert')
      
    };

    changePersonalInformation (firstNameField:string, lastNameField:string, currentPassword:string, newPassword:string, confirmationField:string){
        cy.get('.myaccount-link-list > :nth-child(4)').click(),
        cy.get('#firstname').clear().type(firstNameField),
        cy.get('#lastname').clear().type(lastNameField),
        cy.get('#old_passwd').type(currentPassword),
        cy.get('#passwd').type(newPassword),
        cy.get('#confirmation').type(confirmationField),
        cy.get('#confirmation').click(),
        cy.get(':nth-child(11) > .btn > span').click()
    }

  }
  export = new MyAccountPage();