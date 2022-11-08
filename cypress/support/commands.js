Cypress.Commands.add("login", (usuario, senha) => {
    cy.get("#usuario").type(usuario);
    cy.get("#senha").type(senha);
    cy.contains("Acessar").click();
  });
  
  Cypress.Commands.add("diarioListao", (confTimeOut, dataPeriodo) => {
    cy.contains("Diário de Classe").click();
    cy.get("#link-228").click(220, 34, { force: true });
    cy.wait(confTimeOut);
    cy.get("#SGP_SELECT_BIMESTRE > div > span > i").click();
  
    cy.contains("3º Bimestre").click();
    cy.get('[title="EF - 5A - 5º ANO - Regência de Classe Fund I - 5H"]').should(
      "contain",
      "EF - 5A - 5º ANO"
    );
    cy.get(".ant-table-row > :nth-child(4)").click();
    cy.wait(confTimeOut);
    cy.get('.ant-tabs-tabpane-active > .ant-row > .ant-col > .sc-fjdhpX > .ant-spin-nested-loading > .ant-spin-container > .sc-kjoXOD > .overflow-hidden > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder')
    .type(dataPeriodo)
    cy.get("#VALOR_9").click();
    cy.get(
      '[data-row-key="6378008"] > :nth-child(3) > .justify-content-between > .justify-content-start'
    )
      .should("contain", "AGATHA SARA CAMILO DUARTE")
      .should("be.visible");
  });