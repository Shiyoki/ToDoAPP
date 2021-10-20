//requerimiento minimo de cypress que indica que el servido corre en el localhost:3000

describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000')
    })
  })