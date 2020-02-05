describe("Writing functionality", () => {
    beforeEach(function () {
        // cy.exec('npm run start')
        cy.visit('http://localhost:3000')
      })

  it("Input and send message", () => {
    cy.get('input[name=username]').type("username")
    cy.get('textarea[name=inputMessage]').type("Some great message")
    cy.get('#send').click()
    cy.get('#messages').contains("Some great message")
  });

  it("Input message without username (Expect not sending the message)", () => {
    cy.get('textarea[name=inputMessage]').type("Some great message")
    cy.get('#send').click()
    cy.get('#messages').contains("Some great message").should('not.exist')
  });

  it("Empty message (Expect not sending the message)", () => {
    cy.get('input[name=username]').type("username")
    cy.get('#send').click()
    cy.get('#messages').contains("Some great message").should('not.exist')
  });
});
