class SearchPage {
    elements = {
        homepage: ()=> cy.visit(''),
        loginButton: ()=> cy.get('.login'),
        emailField: () => cy.get('#email'),
        passwordField: () => cy.get('#passwd'),
        submitLogin: () => cy.get('#SubmitLogin > span'),
        searchField: ()=> cy.get('#search_query_top'),
        searchButton: ()=> cy.get('#searchbox > .btn'),
        searchResultPage: ()=> cy.get('#columns'),
        errorMessageField: ()=> cy.get('.alert'),
        productList: ()=> cy.get('.product_list'),
        productDetails: ()=> cy.get('.product-container'),



    };
  }
  export = new SearchPage();
  
  
  