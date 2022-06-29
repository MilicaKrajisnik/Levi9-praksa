class SingupPage {
    elements = {
        
        emailCreateField: ()=> cy.get('#email_create'),
        submitCreate: () => cy.get('#SubmitCreate > span'),
        createanaccountpage: ()=> cy.get('.page-heading'),
        yourpersonalinformatin: ()=> cy.get('.page-subheading'),
        youraddress: ()=> cy.get(':nth-child(2) > .page-subheading'),
        registerButton: ()=> cy.get('#submitAccount'),
        invalidEmailAddress: ()=> cy.get('#create_account_error'),
        alertField: ()=> cy.get('.alert'),
        customerFirstName: ()=> cy.get('#customer_firstname'),
        customerLastName: ()=> cy.get('#customer_lastname'),
        customerPassword: ()=> cy.get('#passwd'),
        address1: ()=> cy.get('#address1'),
        cityField: ()=> cy.get('#city'),
        countryField: ()=> cy.get('#id_state'),
        postalCodeField: ()=> cy.get('#postcode'),
        mobilePhoneField: ()=> cy.get('#phone_mobile'),
        accountButton: ()=> cy.get('.account'),

    };

  }
  export = new SingupPage();