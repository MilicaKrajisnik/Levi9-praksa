/// <reference types="cypress" />

import searchpage = require("../../page-objects/search.page")

import loginpage = require("../../page-objects/login.page")



describe ('Search field Test', ()=>{

    beforeEach(()=>{

        loginpage.homepageStart()
        loginpage.login ('peradetlic095@gmail.com', '12345');

    })

    it('user should be redirected to search results page when enters keyword in search field and clicks search button', ()=>{
        
        searchpage.searchField ('dress')
        searchpage.elements.searchResultPage().should('contain', 'Search').and('contain', 'dress')

    })

    it('user should be redirected to search results page when enters keyword in search field and presses ENTER', ()=>{
        
        searchpage.elements.searchField().type('dress{enter}')
        searchpage.elements.searchResultPage().should('contain', 'Search').and('contain', 'dress')
        // bug, the search results page also shows results for t-shirts instead of just dresses

    })

    it('user should be redirected to search results page with message no results were found for your search camera', ()=>{

        searchpage.searchField ('camera')
        searchpage.elements.errorMessageField().should('contain', 'No results were found for your search')

    })

    it('user should be  redirected to search results page with message please enter a search keyword', ()=>{

        searchpage.searchField (' ')
        searchpage.elements.errorMessageField().should('contain', 'No results were found for your search')

    })

    it('user should be redirected to the search results page and results should be displayed relevant to the search keyword', ()=>{
        
        searchpage.searchField ('shi')
        searchpage.elements.searchResultPage().should('contain', 'Search', 'shi')

    })

    it('user should be redirected to the results page with error message when enters word in different language', ()=>{

        searchpage.searchField ('haljina')
        searchpage.elements.errorMessageField().should('contain', 'No results were found for your search')

    })

    it('user should be redirected to the results page and results should be displayed relevant to the search keywords', ()=>{

        searchpage.searchField ('dress and shirts')

        searchpage.elements.productList()
        searchpage.elements.productDetails()
        // bug, the search results page shows just results for t-shirts instead t-shirts and dresses

    })

})