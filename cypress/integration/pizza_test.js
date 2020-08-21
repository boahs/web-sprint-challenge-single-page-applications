describe("Testing path", () => {
  it("can navigate to http://localhost:3000/", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.url().should("include", "localhost");
  });
});

describe("Can type into fields", () => {
  it('can type into "text" input fields', () => {
    cy.get('input[name="name"]')
      .type("testing")
      .should("have.value", "testing");
  });
});

describe("Can submit new order", () => {
  it("Can submit a new order", () => {
    cy.get("form").submit();
  });
});
