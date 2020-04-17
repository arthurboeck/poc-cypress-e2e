import { routeGetProdutor, routeGetAgenciaAssociado, routeGetCooperativaTecnico } from "../base-tests/routes"
import { documentoFormat } from "../base-tests/general-functions"

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('acessoPropostasList',() => {
    cy.get('[id=propostas]').click()
})

Cypress.Commands.add('acessoPropostasCreate',() => {
    cy.acessoPropostasList()
	cy.get('[id=criar-proposta]').click()
})

Cypress.Commands.add('informarDoctoProdutor',(nrDocumento) => {
    cy.get('input[id=cpf-cnpj]').type(documentoFormat(nrDocumento))
    cy.server()
    cy.route('GET', routeGetProdutor+nrDocumento).as('getProdutor')
    cy.wait('@getProdutor')
    cy.contains(documentoFormat(nrDocumento)).click()

    cy.wait(6000)
    // cy.obtemServicoCooperativasTecnico()
    // cy.obtemServicoAgenciasProdutor(nrDocumento)
})

Cypress.Commands.add('obtemServicoCooperativasTecnico', () => {
    cy.server()
    cy.route('GET', routeGetCooperativaTecnico).as('getCooperativa')
    cy.wait('@getCooperativa')
})

Cypress.Commands.add('obtemServicoAgenciasProdutor', (nrDocumento) => {
    routeGetAgencia = routeGetAgenciaAssociado
    routeGetAgencia = routeGetAgencia.replace('{numDocumento}', nrDocumento)
    cy.server()
    cy.route('GET', routeGetAgencia).as('getAgencia')
    cy.wait('@getAgencia')
})


Cypress.Commands.add('informarCoopProdutor',(coop) => {
    cy.get('#cmb_cooperativa').click()
    cy.contains(coop).click()
})

Cypress.Commands.add('tpPropostaPecuarioSelect',() => {
    cy.get('[class=icon-pecuario]').click()
})

Cypress.Commands.add('tpPropostaAgricolaSelect',() => {
    cy.get('[class=icon-agricola]').click()
})

Cypress.Commands.add('informarCulturaProposta',(cultura) => {
	cy.get('input[id=cultura-atividade]').type(cultura)
    cy.contains(cultura).click()
})

Cypress.Commands.add('informarQtdAnimaisProposta',(qtdAnimais) => {
	cy.get('input[id=qtd-animais-beneficiados]').type(qtdAnimais.toString())
})

Cypress.Commands.add('informarAreaBeneficiadaProposta',(qtdAreaBeneficiada) => {
	cy.get('input[id=area-total-beneficiada]').type(qtdAreaBeneficiada.toString())
})

Cypress.Commands.add('informarVlrTotalFinanciadoProposta',(vlrFinanciado) => {
	cy.get('input[id=valor-total-financiado]').type(vlrFinanciado.toString())
})

Cypress.Commands.add('informarQtdParcelasVencProposta',(qtdParcVenc) => {
	cy.get('mat-select[id=cmb_parcela]').click()
    cy.contains(' '+qtdParcVenc+' ').click()
})

Cypress.Commands.add('enviarProposta',(qtdParcVenc) => {
	cy.get('input[id=btn-enviar]').click()
})

Cypress.Commands.add('preencherModalEnvioProposta',(desc) => {
	cy.get('#comentario').type(desc)
    cy.get('#confirmar').click()
})

Cypress.Commands.add('informarSeguroProposta',(seguro) => {
	cy.get('#cmb_seguro').click()
    cy.contains(' '+seguro+' ').click()
})

Cypress.Commands.add('selecionarPropostaAutorizada',() => {
    cy.get('.status-aguardando').contains('Aguardando Autorização').first().closest('.mat-row').find('button').click()
    //.closest('.mat-row').children('.mat-icon-button').click()
})

Cypress.Commands.add('aprovarProposta',() => {
    cy.get('#aprovar-proposta').click()
})

Cypress.Commands.add('preencherModalAprovarProposta',(desc) => {
    cy.get('#comentario').type(desc)
    cy.get('#confirmar').click()
})

Cypress.Commands.add('recusarProposta',() => {
    cy.get('#recusar-proposta').click()
})

Cypress.Commands.add('preencherModalRecusarProposta',(desc) => {
    cy.get('#comentario').type(desc)
    cy.get('#confirmar').click()
})

Cypress.Commands.add('solicitarAjuste',() => {
    cy.get('#solicitar-ajuste').click()
})

Cypress.Commands.add('preencherModalSolicitarAjuste',(desc) => {
    cy.get('#comentario').type(desc)
    cy.get('#confirmar').click()
})