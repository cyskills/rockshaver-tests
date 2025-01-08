describe('POST /api/agedamentos', () => {
  it('Deve criar um novo agendamento', () => {
    const body = {
      "emailCliente": "fernando@yahoo.com",
      "nomeCliente": "Fernando Papito",
      "data": "20/12/2024",
      "hora": "15:00",
      "matricula": "1001",
      "codigoServico": "1"
    }

    cy.deleteMany(
      { matricula: body.matricula },
      { collection: 'agendamentos' }
    )

    cy.postAgendamento(body).should((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Agendamento criado com sucesso')
      expect(response.body.agendamentoId).to.match(/^[a-fA-F0-9]{24}$/)
    })
  })

  it('Deve retornar erro quando o agendamento já existe', () => {
    const body = {
      "emailCliente": "papito@yahoo.com",
      "nomeCliente": "Papito Fernando",
      "data": "20/12/2024",
      "hora": "10:00",
      "matricula": "1002",
      "codigoServico": "2"
    }

    cy.deleteMany(
      { matricula: body.matricula },
      { collection: 'agendamentos' }
    )

    cy.postAgendamento(body).should((response) => {
      expect(response.status).to.eq(201)
    })

    cy.postAgendamento(body).should((response) => {
      expect(response.status).to.eq(409)
      expect(response.body.message).to.eq('Já existe um agendamento para esta data e hora. Por favor, escolha outro horário.')
    })
  })

  it('Deve retornar erro quando o email é inválido', () => {
    const body = {
      "emailCliente": "papito&yahoo.com",
      "nomeCliente": "Papito Fernando",
      "data": "20/12/2024",
      "hora": "10:00",
      "matricula": "1002",
      "codigoServico": "2"
    }

    cy.postAgendamento(body).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('O campo emailCliente deve conter um email válido.')
    })
  })

  it('Deve retornar erro quando o funcionário não existe', () => {
    const body = {
      "emailCliente": "papito@yahoo.com",
      "nomeCliente": "Papito Fernando",
      "data": "20/12/2024",
      "hora": "10:00",
      "matricula": "9999",
      "codigoServico": "2"
    }

    cy.postAgendamento(body).should((response) => {
      expect(response.status).to.eq(404)
      expect(response.body.error).to.eq('Funcionário não encontrado.')
    })
  })

  it('Deve retornar erro quando o código de serviço não existe', () => {
    const body = {
      "emailCliente": "papito@yahoo.com",
      "nomeCliente": "Papito Fernando",
      "data": "20/12/2024",
      "hora": "10:00",
      "matricula": "1001",
      "codigoServico": "10"
    }

    cy.postAgendamento(body).should((response) => {
      expect(response.status).to.eq(404)
      expect(response.body.error).to.eq('Serviço não encontrado para o código fornecido.')
    })
  })

  context('Campos obrigatórios', () => {

    const camposObrigatorios = [
      { campo: 'emailCliente', mensagem: 'O campo emailCliente é obrigatório.' },
      { campo: 'nomeCliente', mensagem: 'O campo nomeCliente é obrigatório.' },
      { campo: 'data', mensagem: 'O campo data é obrigatório.' },
      { campo: 'hora', mensagem: 'O campo hora é obrigatório.' },
      { campo: 'matricula', mensagem: 'O campo matricula é obrigatório.' },
      { campo: 'codigoServico', mensagem: 'O campo codigoServico é obrigatório.' }
    ]

    camposObrigatorios.forEach((x) => {
      it(`Deve retornar erro quando o ${x.campo} email é obrigatório`, () => {
        const body = {
          "emailCliente": "papito@hotmail.com",
          "nomeCliente": "Papito Fernando",
          "data": "20/12/2024",
          "hora": "10:00",
          "matricula": "1001",
          "codigoServico": "10"
        }

        delete body[x.campo]

        cy.postAgendamento(body).should((response) => {
          expect(response.status).to.eq(400)
          expect(response.body.error).to.eq(x.mensagem)
        })
      })
    })
  })
})