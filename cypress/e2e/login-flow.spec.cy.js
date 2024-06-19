describe("Login flow", () => {
  it("Success Login", () => {
    cy.visit("/login");
    const email = cy.get("[data-cy=input-email]");
    const password = cy.get("[data-cy=input-password]");
    const btn = cy.get("[data-cy=btn-submit]");
    email.type("teste@teste.com");
    password.type("123456");
    btn.click();
    cy.location("pathname").should("eq", "/");
  });

  it("Should have a Home title in the home page", () => {
    cy.visit("/login");
    const email = cy.get("[data-cy=input-email]");
    const password = cy.get("[data-cy=input-password]");
    const btn = cy.get("[data-cy=btn-submit]");
    email.type("teste@teste.com");
    password.type("123456");
    btn.click();
    cy.get("h1").should("have.text", "Home");
  });
});
