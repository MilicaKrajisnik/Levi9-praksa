class SearchPage {
    elements = {
       
        searchField: ()=> cy.get('#search_query_top'),
        searchButton: ()=> cy.get('#searchbox > .btn'),
        searchResultPage: ()=> cy.get('#columns'),
        errorMessageField: ()=> cy.get('.alert'),
        productList: ()=> cy.get('.product_list'),
        productDetails: ()=> cy.get('.product-container'),

    };

        searchField (search:string) {
        cy.get('#search_query_top').type(search),
        cy.get('#searchbox > .btn').click()
        cy.get('#columns')
    
    }
  }
  export = new SearchPage();
  
  
  