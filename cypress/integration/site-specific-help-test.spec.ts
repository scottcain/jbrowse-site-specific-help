describe('Test site specific help plugin', () => {
  it('visits JBrowse', () => {
    // You can put JBrowse 2 into any session you want this way at the beginning
    // of your test!
    cy.fixture('site_specific_help.json').then(sessionData => {
      cy.writeFile(
        '.jbrowse/site_specific_help.json',
        JSON.stringify(sessionData, null, 2),
      )
      cy.visit('/?config=site_specific_help.json')

      // The plugin successfully loads
      cy.contains('Empty').click({ force: true })
      cy.contains('Help').click()
      cy.contains('WormBase Help').click()
      cy.contains('JBrowse 2 @ WormBase')
    })
  })
})
