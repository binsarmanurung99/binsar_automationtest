// cypress/e2e/addToCart.cy.js

describe('Add Product to Cart', () => {
  before(() => {
    // Login sebelum melakukan tes
    cy.visit('https://www.demoblaze.com/index.html');

    // Login dengan kredensial yang valid
    cy.get('#login2').click(); // Klik tombol login
    cy.wait(1000); // Tunggu popup muncul

    cy.get('#loginusername').type('binsar99@gmail.com'); // Ganti dengan username Anda
    cy.get('#loginpassword').type('binsar123'); // Ganti dengan password Anda
    cy.get('button[onclick="logIn()"]').click(); // Klik tombol login
    cy.wait(2000); // Tunggu hingga login selesai
  });

  it('should add a product to the cart', () => {
    // Pastikan sudah login, kemudian pilih produk
    cy.contains('Samsung galaxy s6').click(); // Klik produk yang ingin dibeli
    cy.wait(1000); // Tunggu hingga halaman produk terbuka

    // Klik tombol Add to cart
    cy.contains('Add to cart').click();
    cy.on('window:alert', (text) => {
      // Menangani alert yang muncul setelah menambahkan ke cart
      expect(text).to.contains('Product added.');
    });

    cy.wait(1000); // Tunggu alert tertutup

    // Navigasi ke cart untuk memastikan produk telah ditambahkan
    cy.get('#cartur').click();
    cy.wait(2000); // Tunggu halaman cart terbuka

    // Verifikasi produk ada dalam cart
    cy.get('.success').should('contain', 'Samsung galaxy s6'); // Pastikan produk yang ditambahkan sesuai
    cy.get('.col-lg-1 > .btn').click();
    cy.wait(1000);
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-header').should('be.visible');
    cy.get('#name').type('binsarmanurung'); /// isi nama pemesan 
    cy.get('#country').type('Indonesia'); // isi asal negara
    cy.get('#city').type('Medan')// Isi Kota
    cy.get('#card').type('Mandiri') // isi dengan jenis credit card yang dimiliki
    cy.get('#month').type('August') // isi dengan bulan transaksi
    cy.get('#year').type('2024') // isi dengan tahun transaksi
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(1000);
    cy.get('.confirm').click();
  });

});
