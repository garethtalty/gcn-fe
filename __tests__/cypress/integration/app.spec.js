describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('successfully loads', () => {
    cy.visit('http://localhost:3000'); // change URL to match your dev URL
  });

  it('renders a warning for large browsers', () => {
    cy.viewport(800, 600);
  });

  it('renders a navigation menu for iphone resultion', () => {
    // 375w 667h
    cy.viewport('iphone-6');
  });
});
