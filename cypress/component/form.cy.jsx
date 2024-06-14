import { Form } from "../../src/components/Form";

describe("Form component", () => {
  beforeEach(() => {
    cy.mount(<Form />);
  });

  it("should be able to change the input name value", () => {
    const input = cy.get("[data-cy=input-name]");
    input.should("have.value", "");
    input.type("Teste");
    input.should("have.value", "Teste");
  });

  it("should be able to change the input password value", () => {
    const input = cy.get("[data-cy=input-password]");
    input.should("have.value", "");
    input.type("123456");
    input.should("have.value", "123456");
  });
});
