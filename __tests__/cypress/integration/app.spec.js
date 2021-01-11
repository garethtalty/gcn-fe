describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    // 375w 667h
    cy.viewport('iphone-6');
  });

  it('successfully loads', () => {
    cy.visit('http://localhost:3000');
  });

  it('renders a warning for large browsers', () => {
    cy.viewport(800, 600);
    cy.get('body').then(($els) => {
      const win = $els[0].ownerDocument.defaultView;
      const before = win.getComputedStyle($els[0], 'after');
      const contentValue = before.getPropertyValue('content');
      expect(contentValue).to.contain('Thanks for stopping by.');
      expect(contentValue).to.contain(
        'Head on over to iPhone 6 resolution (375px width) for the real-deal.'
      );
    });
  });

  it('renders a logo for iphone resolution', () => {
    cy.get('[data-test-id="logo"]').should('be.visible');
  });

  it('hide the nav subheader when user has scrolled down', () => {
    const subheader = '[data-test-id="nav-subheader"]';
    cy.get(subheader).should('have.css', 'top', '0px');
    cy.window().scrollTo(0, 200);
    cy.get(subheader).should('have.css', 'top', '-40px');
  });

  it('should show the nav subheader when user scrolls back', () => {
    const subheader = '[data-test-id="nav-subheader"]';
    cy.window().scrollTo(0, 200);
    cy.window().scrollTo(0, 150);
    cy.get(subheader).should('have.css', 'top', '0px');
  });
});
