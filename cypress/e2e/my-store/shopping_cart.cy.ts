/// <reference types="cypress" />

import shopping_cartpage = require("../../page-objects/shopping_cart.page");

import loginpage = require("../../page-objects/login.page");

import searchpage = require("../../page-objects/search.page");

import myaccountpage = require("../../page-objects/my_account.page")


describe ('Shopping Cart Test', ()=>{

    beforeEach (()=>{

        loginpage.homepageStart();

        loginpage.login ('peradetlic095@gmail.com', '12345');

        myaccountpage.elements.myAccountPage();

    });

    it ('should add one item in the cart', ()=>{

        searchpage.searchField('dress');

        searchpage.elements.searchResultPage();

        shopping_cartpage.addProductToShoppingCart();

        shopping_cartpage.viewCart();

        shopping_cartpage.elements.productDescription().should('contain', 'Printed Summer Dress')

        shopping_cartpage.elements.continueShoppingButton2().click()

        myaccountpage.elements.singOutButton().click();

        loginpage.elements.loginButton().click()

        loginpage.login ('peradetlic095@gmail.com', '12345');

        shopping_cartpage.viewCart()

        shopping_cartpage.elements.alert()

        // bug, when user adds item to cart and logs out, then logs in again and shopping cart is empty 

    })

    it ('should increase and reduce quantity in shopping cart page', ()=>{

        searchpage.searchField('dress');

        searchpage.elements.searchResultPage();

        shopping_cartpage.addProductToShoppingCart();
        shopping_cartpage.viewCart();
        shopping_cartpage.elements.productDescription().should('contain', 'Printed Summer Dress')

        shopping_cartpage.elements.quantityPlusButton().click();  // quantity is increased for 1 item, because quantity plus button has been clicked once

        shopping_cartpage.elements.accountButtonHomePage().click();

        shopping_cartpage.viewCart();
        shopping_cartpage.elements.productDescription().should('contain', 'Printed Summer Dress')
        shopping_cartpage.elements.quantityBox().wrap({ amount: 2 }).should('have.property', 'amount').and('eq', 2)

        shopping_cartpage.elements.boxInputQuantity().type('6') // quantity is increased for 6 items, because in quantity box has been added 6 items

        shopping_cartpage.viewCart();
        shopping_cartpage.elements.productDescription().should('contain', 'Printed Summer Dress')
        shopping_cartpage.elements.quantityBox().wrap({ amount: 6 }).should('have.property', 'amount').and('eq', 6)

        shopping_cartpage.elements.quantityMinusButton().click(); // quantity is reduced for 1 item, because quantity minus button has been clicked once

        shopping_cartpage.elements.accountButtonHomePage().click();

        shopping_cartpage.viewCart();
        shopping_cartpage.elements.productDescription().should('contain', 'Printed Summer Dress')
        shopping_cartpage.elements.quantityBox().wrap({ amount: 5 }).should('have.property', 'amount').and('eq', 5)

        shopping_cartpage.elements.boxInputQuantity().type('2');  // quantity is reduced to 2 items, because in quantity box has been typed 2 items

        shopping_cartpage.elements.accountButtonHomePage().click();

        shopping_cartpage.viewCart();
        shopping_cartpage.elements.productDescription().should('contain', 'Printed Summer Dress')
        shopping_cartpage.elements.quantityBox().wrap({ amount: 2 }).should('have.property', 'amount').and('eq', 2)

    })

    it ('should delete items from shopping cart page', ()=>{

        searchpage.searchField('dress');

        searchpage.elements.searchResultPage();

        shopping_cartpage.addProductToShoppingCart();

        shopping_cartpage.viewCart();

        shopping_cartpage.elements.deleteButton().click();

        shopping_cartpage.elements.alert().should('contain', 'Your shopping cart is empty')

    })

    it ('should change price', ()=>{

        searchpage.searchField('dress');

            searchpage.elements.searchResultPage();
    
            shopping_cartpage.addProductToShoppingCart();
    
            shopping_cartpage.viewCart();

            shopping_cartpage.elements.totalField();

            shopping_cartpage.elements.boxInputQuantity().type('6');

            shopping_cartpage.elements.accountButtonHomePage().click();

            shopping_cartpage.viewCart();

            shopping_cartpage.elements.totalField().wrap({ amount: 173.88 }).should('have.property', 'amount').and('eq', 173.88);  // total price is increased in amount for 6 items
            shopping_cartpage.elements.totalProducts().wrap({ amount: 173.88 }).should('have.property', 'amount').and('eq', 173.88);

    })

});