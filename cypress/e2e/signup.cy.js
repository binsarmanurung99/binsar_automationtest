// Pengujian halaman signup
const { home } = require('ospath');
const homePages = require('../support/pages/home-pages/homePages');

describe("Sign Up", () => {
it("with valid data ver 1 ", () => {

// versi 1 
    cy.visit('https://www.demoblaze.com/index.html'); // untuk mengarahkan ke website yang akan diautomation
    cy.get('#nava').should('be.visible');
    cy.get('#signin2').click(); // untuk menguji tombol sign uup
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header').should('be.visible'); // memastikan modal tampil
    cy.wait(5000);
    cy.get('#sign-username').type('binsar99@gmail.com'); //melakukan pengujian input username
    cy.get('#sign-password').type('binsar123');//melakukan pengujian input password
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

// versi 2
require('cypress-xpath')
it("with valid data ver 2 ",() => {
   homePages.goToHOmePage()
   homePages.verifyAlertAppears()
   homePages.clickSignUpMenu()
   homePages.verifySignUpModalAppears()
   homePages.fillUsername()
   homePages.fillPassword()
   homePages.verifyAlertAppears()

})
})
})