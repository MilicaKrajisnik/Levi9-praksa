class SingupPage {
    elements = {
        homepage: ()=> cy.visit(''),
        loginButton: ()=> cy.get('.login'),
        emailField: ()=> cy.get('#email_create'),
        submitLogin: () => cy.get('#SubmitCreate > span'),
        createanaccountpage: ()=> cy.get('.page-heading'),
        yourpersonalinformatin: ()=> cy.get('.page-subheading'),
        youradress: ()=> cy.get(':nth-child(2) > .page-subheading'),
        registerButton: ()=> cy.get('#submitAccount'),
        invalidEmailAddress: ()=> cy.get('#create_account_error'),
        errorField: ()=> cy.get('.alert'),
        customerFirstName: ()=> cy.get('#customer_firstname'),
        customerLastName: ()=> cy.get('#customer_lastname'),
        customerPassword: ()=> cy.get('#passwd'),
        address1: ()=> cy.get('#address1'),
        cityField: ()=> cy.get('#city')
    };
  }
  export = new SingupPage();