import { usuarioACR, qtdParcPec, dadosPropPecuario, produtorPfComVariasCoops, dadosPropVlrFinanciado, statusProposta } from "../../../base-tests/mock-proposta-front";
import { routePostPropostaPecuario, routeGetConsultarProposta } from "../../base-tests/routes";
import { getTokenId } from "../../base-tests/general-functions";

describe('Open Application', () => {

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    // CENARIO 01 PF
    it.skip('Open Application', () => {
        cy.access()
        cy.acessarAgroMais()

        // dadosPropPecuario.nomeFinalidadeTipo = null
        const today = new Date().toISOString().slice(0, 10)

        cy.server()
        cy.route('POST', routePostPropostaPecuario).as('postPropostaPecuario')

        cy.wait(5000)
        cy.acessoPropostasCreate()
        cy.informarDoctoProdutor(produtorPfComVariasCoops.nrDocumento)
        cy.informarCoopProdutor(produtorPfComVariasCoops.nmCoop)
        cy.tpPropostaPecuarioSelect()
        cy.informarCulturaProposta(dadosPropPecuario.nmCultura)
        cy.informarQtdAnimaisProposta(dadosPropPecuario.animaisBeneficiados)
        cy.informarVlrTotalFinanciadoProposta(dadosPropVlrFinanciado)
        cy.informarQtdParcelasVencProposta(qtdParcPec)
        cy.enviarProposta()
        cy.preencherModalEnvioProposta('Registro gerado via automação de testes')

        // cy.wait('@postPropostaPecuario')
        // cy.get('@postPropostaPecuario').then((xhr) => {
        //     expect(xhr.status).to.eq(201)
        //     expect(xhr.method).to.eq('POST')
        //     let idProposta = (xhr.response.body.id)

        //     cy.server()
        //     cy.request({
        //         method: 'GET', 
        //         url: routeGetConsultarProposta+idProposta,
        //         auth:{
        //             bearer:getTokenId()
        //         }
        //         }).then((response => {
        //             expect(response.status).to.eq(200)
        //             expect(response.body).property('id').to.eq(idProposta)
    
        //             cy.assertBodyUsuario(response.body, usuarioACR.username, usuarioACR.nomeUsuario)
        //             cy.assertBodyDadosFinanciamentoPecuario(response.body, dadosPropPecuario.animaisBeneficiados, dadosPropVlrFinanciado, qtdParcPec)
        //             cy.assertBodyCulturaAtividade(response.body, dadosPropPecuario.nmCultura, dadosPropPecuario.idCulturaAtividade)
        //             cy.assertBodyStatusProposta(response.body, statusProposta.solicAguardandoAutorizacao)
        //             //cy.assertBodyDatasProposta(response.body, today, today)            
        //             cy.assertBodyEnquadramento(response.body, dadosPropPecuario.nomeEnquadramento.toUpperCase(), dadosPropPecuario.idEnquadramento, dadosPropPecuario.nomeFinalidadeTipo, dadosPropPecuario.idFinalidade, dadosPropPecuario.tipoProposta)
        //             //cy.assertBodyEntidades(response.body, produtorPfComVariasCoops.nmCoop, produtorPfComVariasCoops.idCoop, produtorPfComVariasCoops.nmAgencia, produtorPfComVariasCoops.idAgencia)
        //             cy.assertBodyProdutorRural(response.body, produtorPfComVariasCoops.idProdutor, produtorPfComVariasCoops.nmProdutor, produtorPfComVariasCoops.nrDocumento)
    
        //             expect(response.body).property('fonteRecurso').to.eq(null)
        //             expect(response.body).property('fonteRecursoEnum').to.eq(null)
        //         }))
        //   })
    })
});