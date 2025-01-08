
describe('Pré-Cadastro', () => {
  it('Deve realizar o pré-cadastro do cliente', () => {
    const usuario = {
      nome: 'Fernando Papito',
      email: 'papito@gmail.com'
    }

    cy.iniciarPreCadastro(usuario)
    cy.verificarPreCadastro(usuario)
  })

  it('Campos obrigatórios', () => {
    cy.iniciarPreCadastro()
    cy.verificarAlerta('Nome Completo', 'O campo nome é obrigatório.')
    cy.verificarAlerta('E-mail', 'O campo e-mail é obrigatório.')
  })

  it('Não deve fazer o pré-cadastro apenas com o primeiro nome', () => {
    const usuario = {
      nome: 'Fernando',
      email: 'papito@gmail.com'
    }

    cy.iniciarPreCadastro(usuario)
    cy.verificarAlerta('Nome Completo', 'Informe seu nome completo.')
  })

  it('Não deve fazer o pré-cadastro com email incorreto', () => {
    const usuario = {
      nome: 'Fernando Papito',
      email: 'www.teste.com.br'
    }

    cy.iniciarPreCadastro(usuario)
    cy.verificarAlerta('E-mail', 'O e-mail inserido é inválido.')
  })
})