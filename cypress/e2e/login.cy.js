const { home } = require('ospath');
const homePages = require('../support/pages/login-pages/loginPages'); 

describe("Login", () => {
it("with valid data ver 1 ", () => {

// versi 1 
  cy.visit('https://www.demoblaze.com/index.html'); // untuk mengarahkan ke website yang akan diautomation
  cy.get('#nava').should('be.visible');
  cy.get('#login2').click(); // untuk menguji tombol sign uup
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-header').should('be.visible');
  cy.wait(5000);
  cy.get('#loginusername').type('binsar99@gmail.com'); //melakukan pengujian input username
  cy.get('#loginpassword').type('binsar123');//melakukan pengujian input password
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  cy.wait(5000);
  cy.on('window:alert',(t)=>{
    expect(t).to.contains('Login Berhasil.');
    });
  cy.wait(2000);

})

// versi 2
//require('cypress-xpath')
//it("with valid data ver 2 ",() => {
 //  homePages.goToHOmePage()
   // homePages.verifyAlertAppears()
// homePages.clickLogInMenu()
// homePages.verifyLogInModalAppears()
  // homePages.fillLogInUsername()
   // homePages.fillLogInPassword()
    // homePages.verifyAlertAppears()

//})
})
 // 