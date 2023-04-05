describe('Mediagraph Health Check', () => {
  it('passes', () => {
    cy.visit('https://mediagraph.io')
    cy.contains('Mediagraph')
    cy.contains('Login')
  })
})