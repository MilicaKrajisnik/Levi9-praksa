/// <reference types="cypress" />

import searchpage = require("../../page-objects/search.page")

function searchField (search:string) {
    searchpage.elements.searchField().type(search),
    searchpage.elements.searchButton().click()
    searchpage.elements.searchResultPage()

}

describe ('Search field Test', ()=>{

    beforeEach(()=>{

        searchpage.elements.homepage()
        searchpage.elements.loginButton().click()
        searchpage.elements.emailField().type('peradetlic095@gmail.com')
        searchpage.elements.passwordField().type('98765')
        searchpage.elements.submitLogin().click()

    })

    it('user should be redirected to search results page when enters keyword in search field and clicks search button', ()=>{
        
        searchField ('dress')

        searchpage.elements.searchResultPage().should('contain', 'Search').and('contain', 'dress')

    })

    it('user should be redirected to search results page when enters keyword in search field and presses ENTER', ()=>{
        
        searchpage.elements.searchField().type('dress{enter}')

        searchpage.elements.searchResultPage().should('contain', 'Search').and('contain', 'dress')
        // bug, the search results page also shows results for t-shirts instead of just dresses

    })

    it('user should be redirected to search results page with message no results were found for your search camera', ()=>{

        searchField ('camera')

        searchpage.elements.searchResultPage().should('contain', 'Search').and('contain', 'dress')

        searchpage.elements.errorMessageField()

    })

    it('user should be  redirected to search results page with message please enter a search keyword', ()=>{

        searchField (' ')

        searchpage.elements.errorMessageField()

    })

    it('user should be redirected to the search results page and results should be displayed relevant to the search keyword', ()=>{
        
        searchField ('shi')

    })

    it('user should be redirected to the results page with error message when enters word in different language', ()=>{

        searchField ('haljina')
        searchpage.elements.errorMessageField()

    })

    it('user should be redirected to the results page and results should be displayed relevant to the search keywords', ()=>{

        searchField ('dress and shirts')

        searchpage.elements.productList()
        searchpage.elements.productDetails()
        // bug, the search results page shows just results for t-shirts instead t-shirts and dresses

    })

})