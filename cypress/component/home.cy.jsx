import App from "../../src/App";

describe("App component", () => {
  beforeEach(() => {
    cy.mount(<App />);
  });

  it("should change button text after click on it", () => {
    const button = cy.get("button");
    button.should("have.text", "count is 0");
    button.click();
    button.should("have.text", "count is 1");
    button.should("not.have.text", "count is 0");
  });

  it("should change button text after one click to count is 1", () => {
    const button = cy.get("button");
    button.should("have.text", "count is 0");
    button.click();
    button.should("have.text", "count is 1");
  });

  it("should change button text after one click to not contain count is 0", () => {
    const button = cy.get("button");
    button.should("have.text", "count is 0");
    button.click();
    button.should("not.have.text", "count is 0");
  });

  it("should have text count on button", () => {
    cy.get("button").contains("count");
  });

  // Quero saber se existe a palavra React em uma tag H1
  it("should have text React on h1", () => {
    cy.get("h1").contains("React");
  });

  // Eu quero saber se o texto para count is 2 muda depois de clicar duas vezes no botão
  it("should change button text after two click to count is 2", () => {
    const button = cy.get("button");
    button.should("have.text", "count is 0");
    button.click();
    button.click();
    button.should("have.text", "count is 2");
  });
});
