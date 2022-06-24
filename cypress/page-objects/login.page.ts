class LoginPage {
    elements = {
      loginButton: () => cy.get('.login'),
      emailField: () => cy.get('#email'),
      passwordField: () => cy.get('#passwd'),
      submitLogin: () => cy.get('#SubmitLogin > span'),
      logoutButton: () => cy.get('.logout'),
      accountName: () => cy.get('.account > span'),
      orderHistoryAndDetailsButton: () => cy.get(':nth-child(1) > .myaccount-link-list > :nth-child(1) > a > span'),
      myCreditSlipsButton: () => cy.get('.myaccount-link-list > :nth-child(2) > a > span'),
      myAddressesButton: () => cy.get('.myaccount-link-list > :nth-child(3) > a > span'),
      myPersonalInformationButton: () => cy.get('.myaccount-link-list > :nth-child(4) > a > span'),
      myWishListButton: () => cy.get('.lnk_wishlist > a > span'),
      authenticationPage: () => cy.get('div#center_column li')
      
    };

  }
  export = new LoginPage();
