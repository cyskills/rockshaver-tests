// Passo: Iniciar Agendamento
Cypress.Commands.add('iniciarAgendamento', () => {
    cy.contains('a', 'Agendar um horário').click();
});

// Passo: Escolher o Profissional
Cypress.Commands.add('escolherProfissional', (profissional) => {
    cy.contains('span', 'Membros da Equipe').should('be.visible');
    cy.contains('div', profissional).parent().click();
});

// Passo: Selecionar Serviço
Cypress.Commands.add('selecionarServico', (servico) => {
    cy.contains('span', 'Serviços').should('be.visible');
    cy.contains('div', servico).parent().click();
});

// Passo: Escolher o Dia do Agendamento
Cypress.Commands.add('escolherDiaAgendamento', (dia) => {
    cy.contains('span', 'Dias Disponíveis').should('be.visible');
    cy.contains('.dia-semana', dia).click();
});

// Passo: Escolher o horário do Agendamento
Cypress.Commands.add('escolherHorarioAgendamento', (hora) => {
    cy.contains('span', 'Horários Disponíveis').should('be.visible');
    cy.contains('.hora-opcao', hora).click();
});

// Passo: Finaliza Agendamento
Cypress.Commands.add('finalizarAgendamento', () => {
    cy.contains('button', 'Confirmar e reservar').click();
});
