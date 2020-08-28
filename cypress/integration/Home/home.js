describe('Home tests', () => {
  it('Visits Pokedex', () => {
    cy.visit('/');
  });

  it('Go next page', () => {
    const nextButton = cy.get('[data-testid=btn-pagination-next]');
    nextButton.click();
  });

  it('Go previous page', () => {
    const previousButton = cy.get('[data-testid=btn-pagination-previous]');
    previousButton.click();
  });

  it('Go to details page', () => {
    cy.get('a')
      .first()
      .click();
    cy.location().should(loc => {
      expect(loc.pathname).to.eq(`/pokemon/bulbasaur`);
    });
  });
});
