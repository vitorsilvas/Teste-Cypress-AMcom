/// <reference types="cypress"> />

const data = require("../../fixtures/data.json");

context("Listar estudantes", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
 
  it(`Deve validar se está visível nome da primeira estudante 'AGATHA SARA CAMILO DUARTE' após selecionar período '18/09/2022 - 23/09/2022'`, () => {
    cy.login(data.usuario, data.senha);
    cy.diarioListao(data.confTimeOut, data.dataPeriodo);
  });
});
context("Trocar perfil", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

 
  it(`Deve alterar perfil "Professor" para perfil "Professor" CJ com sucesso`, () => {
    cy.login(data.usuario, data.senha);
    cy.wait(data.confTimeOut);
    cy.get("#SGP_MENU_PERFIL_BUTTON_EXPANDIR_RETRAIR_PERFIL").click();
    cy.get('[style="width: 100%; font-weight: initial;"]').click();
    cy.get("#SGP_MENU_PERFIL_BUTTON_EXPANDIR_RETRAIR_PERFIL").should(
      "contain",
      "Professor CJ"
    );
  });
});