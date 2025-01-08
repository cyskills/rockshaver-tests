import { profissional, agendamentos } from '../fixtures/agendamentos.json'


describe('Meus Agendamentos', () => {

    before(() => {
        cy.criarAgendamentosApi(profissional, agendamentos)
    })

    beforeEach(() => {
        cy.viewport('iphone-xr')
        cy.visit('/')

        cy.contains('p', 'Faça login com a sua conta')
            .should('be.visible')

        cy.login(profissional)
        cy.verificarUsuarioLogado(profissional)
    })

    it('Deve exibir os meus agendamentos', () => {
        cy.get('ul li')
            .should('be.visible')
            .and('have.length', agendamentos.length)
            .each(($li, index) => {

                const agedamento = agendamentos[index]
                const resultado = `${agedamento.servico.descricao} no dia ${agedamento.data} às ${agedamento.hora}`

                cy.wrap($li)
                    .invoke('text')
                    .should('contain', agedamento.usuario.nome)
                    .and('contain', resultado)

            })

    })

    it('Deve cancelar um agendamento', () => {
        const agendamento = agendamentos.find(x => x.usuario.email === 'peter@stark.com')

        cy.contains('ul li', agendamento.usuario.nome)
            .as('agendamentoItem')

        cy.get('@agendamentoItem')
            .should('be.visible')
            .click()

        cy.contains('span', 'Cancelar agendamento')
            .should('be.visible')
            .click()

        cy.verificarToast('Agendamento cancelado com sucesso!')

        cy.get('@agendamentoItem')
            .should('not.exist')
    })

    it('Deve enviar uma solicitação de lembrete', () => {
        const agendamento = agendamentos.find(x => x.usuario.email === 'destino@marvel.com')

        cy.contains('ul li', agendamento.usuario.nome)
            .as('agendamentoItem')

        cy.get('@agendamentoItem')
            .should('be.visible')
            .click()

        cy.contains('span', 'Enviar lembrete por e-mail')
            .should('be.visible')
            .click()

        cy.verificarToast('Lembrete enviado com sucesso!')
    })

})