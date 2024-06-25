describe("Home flow", () => {
  it("should go to login page after click on the link", () => {
    cy.visit("/");
    const link = cy.get("[data-cy=link]");
    link.click();
    cy.location("pathname").should("eq", "/login");
  });

  it("should be able to find a title on dashboard page", () => {
    cy.visit("/");
    const link = cy.get("[data-cy=link]");
    link.click();
    cy.location("pathname").should("eq", "/login");
    const email = cy.get("[data-cy=input-email]");
    const password = cy.get("[data-cy=input-password]");
    const btn = cy.get("[data-cy=btn-submit]");
    email.type("teste@teste.com");
    password.type("123456");
    btn.click();
    cy.location("pathname").should("eq", "/dashboard");
    const title = cy.get("[data-cy=title");
    title.should("have.text", "Página inicial");
  });
});
