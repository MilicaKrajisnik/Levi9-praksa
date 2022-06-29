class ShoppingChartPage {
    elements = {
        productContainer: ()=> cy.get(':nth-child(1) > .product-container > .left-block > .product-image-container'),
        choosenProductPage: ()=> cy.get('#columns'),
        choosenProductSize: ()=> cy.get('#group_1'),
        choosenProductColor: ()=> cy.get('#color_16'),
        addToCartButton: ()=> cy.get('.exclusive > span'),
        popUpMessage: ()=> cy.get('.layer_cart_product'),
        continueShoppingButton: ()=> cy.get('.continue > span'),
        viewMyShoppingCart: ()=> cy.get('[title="View my shopping cart"]'),
        shoppingCartSummary: ()=> cy.get('.page-heading'),
        continueShoppingButton2: ()=> cy.get('.button-exclusive'),
        alert: ()=> cy.contains('Your shopping cart is empty.'),
        quantityPlusButton: ()=> cy.get('.icon-plus'),
        quantityBox: ()=> cy.get('.cart_quantity.text-center'),
        boxInputQuantity: ()=> cy.get('.cart_quantity_input'),
        quantityMinusButton: ()=> cy.get('.icon-minus'),
        deleteButton: ()=> cy.get('.icon-trash'),
        totalField: ()=> cy.get('#total_price_container'), 
        accountButtonHomePage: ()=> cy.get('.account > span'),
        itemName: ()=> cy.get('h1'),
        productDescription: ()=> cy.get('#product_5_23_0_714843 > .cart_description'),
        totalProducts: ()=> cy.get(':nth-child(1) > .text-right')
       
    };

    viewCart(){
        
        cy.get('[title="View my shopping cart"]').click()
        cy.get('.page-heading')
    }

    addProductToShoppingCart (){

        cy.get(':nth-child(1) > .product-container > .left-block > .product-image-container').click();
        cy.get('#columns');
        cy.get('h1').should('contain', 'Printed Summer Dress')
        cy.get('#group_1').select('M');
        cy.get('#color_16').click(),
        cy.get('.exclusive > span').click(),
        cy.get('.layer_cart_product').should('contain', 'Product successfully added to your shopping cart'),
        cy.get('.continue > span').click()
    }

  }
  export = new ShoppingChartPage();