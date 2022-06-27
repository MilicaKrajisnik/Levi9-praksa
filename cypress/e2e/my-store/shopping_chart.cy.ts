/// <reference types="cypress" />

import shopping_chartpage = require("../../page-objects/shopping_chart.page");

import loginpage = require("../../page-objects/login.page");

import searchpage = require("../../page-objects/search.page");

import myaccountpage = require("../../page-objects/my_account.page")


describe ('Shopping Chart Test', ()=>{

    beforeEach (()=>{

        loginpage.homepageStart();

        loginpage.login ('peradetlic095@gmail.com', '12345');

        myaccountpage.elements.myAccountPage();

    });

    it ('should add one item in the chart', ()=>{

        searchpage.searchField('dress');

        searchpage.elements.searchResultPage();

        shopping_chartpage.addProductToShoppingCart()

        shopping_chartpage.viewCart()

        shopping_chartpage.elements.continueShoppingButton2().click()

        myaccountpage.elements.singOutButton().click();

        loginpage.elements.loginButton().click()

        loginpage.login ('peradetlic095@gmail.com', '12345');

        shopping_chartpage.viewCart()

        shopping_chartpage.elements.alert()

        // bug, when user adds item to cart and logs out, then logs in again and shopping cart is empty 

    })

    it ('should increase and reduce quantity in shopping cart page', ()=>{

        searchpage.searchField('dress');

        searchpage.elements.searchResultPage();

        shopping_chartpage.addProductToShoppingCart();

        shopping_chartpage.viewCart();

        shopping_chartpage.elements.quantityPlusButton().click();  // quantity is increased for 1 item, because quantity plus button has been clicked once

        shopping_chartpage.elements.accountButtonHomePage().click();

        shopping_chartpage.viewCart();

        shopping_chartpage.elements.quantityBox().type('6') // quantity is increased for 6 items, because in quantity box has been added 6 items

        shopping_chartpage.elements.quantityMinusButton().click(); // quantity is reduced for 1 item, because quantity minus button has been clicked once

        shopping_chartpage.elements.accountButtonHomePage().click();

        shopping_chartpage.viewCart();

        shopping_chartpage.elements.quantityBox().type('2');  // quantity is reduced to 2 items, because in quantity box has been typed 2 items

    })

    it ('should delete items from shopping cart page', ()=>{

        searchpage.searchField('dress');

        searchpage.elements.searchResultPage();

        shopping_chartpage.addProductToShoppingCart();

        shopping_chartpage.viewCart();

        shopping_chartpage.elements.deleteButton().click();

        shopping_chartpage.elements.alert()

    })

    it ('should change price', ()=>{

        searchpage.searchField('dress');

            searchpage.elements.searchResultPage();
    
            shopping_chartpage.addProductToShoppingCart();
    
            shopping_chartpage.viewCart();

            shopping_chartpage.elements.totalPriceField();

            shopping_chartpage.elements.quantityBox().type('6');

            shopping_chartpage.elements.totalPriceField();  // total price is increased in amount for 6 items
    
    })

});