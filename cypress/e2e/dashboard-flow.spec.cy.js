describe("Dashboard Flow", () => {
  it("should be able to logout", () => {
    cy.visit("/dashboard");
    const link = cy.get("[data-cy=link-home]");
    link.click();
    cy.location("pathname").should("eq", "/");
  });
});
