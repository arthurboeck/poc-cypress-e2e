import { usuarioACR, dadosPropAgricola, tipoSeguro, qtdParcAgric, produtorPfComVariasCoops, dadosPropVlrFinanciado, statusProposta, produtorPjCoopUnica } from "../../../base-tests/mock-proposta-front";
import { numberFormat, getTokenId } from "../../base-tests/general-functions";
import { routePostPropostaAgricola, routeGetConsultarProposta } from "../../base-tests/routes";



describe('Cadastrar Proposta Agrícola', () => {

    beforeEach(() => {
        cy.consoleErrosOff();
    });

    // CENARIO 01 PF
    it('Cadastrar Proposta Agrícola - Produtor PF N Coops - Seguro Pro Agro', () => {
        cy.acessoLogin(usuarioACR.username, usuarioACR.password)
        cy.acessarAgroMais()
        
        const vlrFinanciadoHA = parseFloat(dadosPropVlrFinanciado) / parseFloat(dadosPropAgricola.areaBeneficiada)
        const strVlrFinanciadoHA = numberFormat(vlrFinanciadoHA)
        const today = new Date().toISOString()
        // var idProposta

        cy.server()
        cy.route('POST', routePostPropostaAgricola).as('postPropostaAgricola')
        cy.wait(5000)
        cy.acessoPropostasCreate()
        cy.informarDoctoProdutor(produtorPfComVariasCoops.nrDocumento)
        cy.informarCoopProdutor(produtorPfComVariasCoops.nmCoop)
        cy.tpPropostaAgricolaSelect()
        cy.informarCulturaProposta(dadosPropAgricola.nmCultura)
        cy.informarSeguroProposta(tipoSeguro.segProAgro)
        cy.informarAreaBeneficiadaProposta(dadosPropAgricola.areaBeneficiada)
        cy.informarVlrTotalFinanciadoProposta(dadosPropVlrFinanciado)
        cy.get('input[id=valor-financiado-por-hectare]').should('have.value', strVlrFinanciadoHA.toString())
        cy.informarQtdParcelasVencProposta(qtdParcAgric)
        cy.enviarProposta()
        cy.preencherModalEnvioProposta('Registro gerado via automação de testes')

        cy.wait('@postPropostaAgricola')
        cy.get('@postPropostaAgricola').then((xhr) => {
            expect(xhr.status).to.eq(201)
            expect(xhr.method).to.eq('POST')
            let idProposta = (xhr.response.body.id)

            cy.server()
            cy.request({
            method: 'GET', 
            url: routeGetConsultarProposta+idProposta,
            auth:{
                bearer:getTokenId()
            }
            }).then((response => {
                expect(response.status).to.eq(200)
                expect(response.body).property('id').to.eq(idProposta)

                console.log(response.body)
                // cy.assertBodyUsuario(response.body, usuarioACR.username, usuarioACR.nomeUsuario)

                // cy.assertBodyDadosFinanciamentoAgricola(response.body, dadosPropAgricola.areaBeneficiada, vlrFinanciadoHA, dadosPropVlrFinanciado, qtdParcAgric)
                // cy.assertBodyCulturaAtividade(response.body, dadosPropAgricola.nmCultura, dadosPropAgricola.idCulturaAtividade)
                // cy.assertBodyStatusProposta(response.body, statusProposta.solicAguardandoAutorizacao)
                // // cy.assertBodyDatasProposta(response.body, today, today)    
                // cy.assertBodyEnquadramento(response.body, dadosPropAgricola.nomeEnquadramento.toUpperCase(), dadosPropAgricola.idEnquadramento, dadosPropAgricola.nomeFinalidadeTipo, dadosPropAgricola.idFinalidade, dadosPropAgricola.tipoProposta)
                // cy.assertBodyModalidadeSeguro(response.body, tipoSeguro.idSeguroProAgro, tipoSeguro.segProAgro)
                // //cy.assertBodyEntidades(response.body, produtorPfComVariasCoops.nmCoop. produtorPfComVariasCoops.idCoop, produtorPfComVariasCoops.nmAgencia, produtorPfComVariasCoops.idAgencia)
                // cy.assertBodyProdutorRural(response.body, produtorPfComVariasCoops.idProdutor, produtorPfComVariasCoops.nmProdutor, produtorPfComVariasCoops.nrDocumento)

                expect(response.body).property('fonteRecurso').to.eq(null)
                expect(response.body).property('fonteRecursoEnum').to.eq(null)
                }))
          })
    })

    // CENARIO 02 PF
    it('Cadastrar Proposta Agrícola - Produtor PF N Coopsf - Seguro OMS', () => {
        cy.acessarAgroMais()

        const vlrFinanciadoHA = parseFloat(dadosPropVlrFinanciado) / parseFloat(dadosPropAgricola.areaBeneficiada)
        const strVlrFinanciadoHA = numberFormat(vlrFinanciadoHA)
        const today = new Date().toISOString().slice(0, 10)

        cy.server()
        cy.route('POST', routePostPropostaAgricola).as('postPropostaAgricola')
        cy.wait(5000)
        cy.acessoPropostasCreate()
        cy.informarDoctoProdutor(produtorPfComVariasCoops.nrDocumento)
        cy.informarCoopProdutor(produtorPfComVariasCoops.nmCoop)
        cy.tpPropostaAgricolaSelect()
        cy.informarCulturaProposta(dadosPropAgricola.nmCultura)
        cy.informarSeguroProposta(tipoSeguro.segOms)
        cy.informarAreaBeneficiadaProposta(dadosPropAgricola.areaBeneficiada)
        cy.informarVlrTotalFinanciadoProposta(dadosPropVlrFinanciado)
        cy.get('input[id=valor-financiado-por-hectare]').should('have.value', strVlrFinanciadoHA.toString())
        cy.informarQtdParcelasVencProposta(qtdParcAgric)
        cy.enviarProposta()
        cy.preencherModalEnvioProposta('Registro gerado via automação de testes')

        cy.wait('@postPropostaAgricola')
        cy.get('@postPropostaAgricola').then((xhr) => {
            expect(xhr.status).to.eq(201)
            expect(xhr.method).to.eq('POST')
            let idProposta = (xhr.response.body.id)

            cy.server()
            cy.request({
            method: 'GET', 
            url: routeGetConsultarProposta+idProposta,
            auth:{
                bearer:getTokenId()
            }
            }).then((response => {
                expect(response.status).to.eq(200)
                expect(response.body).property('id').to.eq(idProposta)

                cy.assertBodyUsuario(response.body, usuarioACR.username, usuarioACR.nomeUsuario)
                cy.assertBodyDadosFinanciamentoAgricola(response.body, dadosPropAgricola.areaBeneficiada, vlrFinanciadoHA, dadosPropVlrFinanciado, qtdParcAgric)
                cy.assertBodyCulturaAtividade(response.body, dadosPropAgricola.nmCultura, dadosPropAgricola.idCulturaAtividade)
                cy.assertBodyStatusProposta(response.body, statusProposta.solicAguardandoAutorizacao)
                // cy.assertBodyDatasProposta(response.body, today, today)            
                cy.assertBodyEnquadramento(response.body, dadosPropAgricola.nomeEnquadramento.toUpperCase(), dadosPropAgricola.idEnquadramento, dadosPropAgricola.nomeFinalidadeTipo, dadosPropAgricola.idFinalidade, dadosPropAgricola.tipoProposta)
                cy.assertBodyModalidadeSeguro(response.body, tipoSeguro.idSeguroOms, tipoSeguro.segOms)
                //cy.assertBodyEntidades(response.body, produtorPfComVariasCoops.nmCoop, produtorPfComVariasCoops.idCoop, produtorPfComVariasCoops.nmAgencia, produtorPfComVariasCoops.idAgencia)
                cy.assertBodyProdutorRural(response.body, produtorPfComVariasCoops.idProdutor, produtorPfComVariasCoops.nmProdutor, produtorPfComVariasCoops.nrDocumento)

                expect(response.body).property('fonteRecurso').to.eq(null)
                expect(response.body).property('fonteRecursoEnum').to.eq(null)
            }))
          })
    })

    // CENARIO 03 PJ
    it('Cadastrar Proposta Agrícola - Produtor PJ Coop Unica - Seguro Pro Agro', () => {
        cy.acessarAgroMais()

        const vlrFinanciadoHA = parseFloat(dadosPropVlrFinanciado) / parseFloat(dadosPropAgricola.areaBeneficiada)
        const strVlrFinanciadoHA = numberFormat(vlrFinanciadoHA)
        const today = new Date().toISOString().slice(0, 10)

        cy.server()
        cy.route('POST', routePostPropostaAgricola).as('postPropostaAgricola')
        cy.wait(5000)
        cy.acessoPropostasCreate()
        cy.informarDoctoProdutor(produtorPjCoopUnica.nrDocumento)
        cy.tpPropostaAgricolaSelect()
        cy.informarCulturaProposta(dadosPropAgricola.nmCultura)
        cy.informarSeguroProposta(tipoSeguro.segProAgro)
        cy.informarAreaBeneficiadaProposta(dadosPropAgricola.areaBeneficiada)
        cy.informarVlrTotalFinanciadoProposta(dadosPropVlrFinanciado)
        cy.get('input[id=valor-financiado-por-hectare]').should('have.value', strVlrFinanciadoHA.toString())
        cy.informarQtdParcelasVencProposta(qtdParcAgric)
        cy.enviarProposta()
        cy.preencherModalEnvioProposta('Registro gerado via automação de testes')

        cy.wait('@postPropostaAgricola')
        cy.get('@postPropostaAgricola').then((xhr) => {
            expect(xhr.status).to.eq(201)
            expect(xhr.method).to.eq('POST')
            let idProposta = (xhr.response.body.id)

            cy.server()
            cy.request({
            method: 'GET', 
            url: routeGetConsultarProposta+idProposta,
            auth:{
                bearer:getTokenId()
            }
            }).then((response => {
                expect(response.status).to.eq(200)
                expect(response.body).property('id').to.eq(idProposta)

                cy.assertBodyUsuario(response.body, usuarioACR.username, usuarioACR.nomeUsuario)
                cy.assertBodyDadosFinanciamentoAgricola(response.body, dadosPropAgricola.areaBeneficiada, vlrFinanciadoHA, dadosPropVlrFinanciado, qtdParcAgric)
                cy.assertBodyCulturaAtividade(response.body, dadosPropAgricola.nmCultura, dadosPropAgricola.idCulturaAtividade)
                cy.assertBodyStatusProposta(response.body, statusProposta.solicAguardandoAutorizacao)
                // cy.assertBodyDatasProposta(response.body, today, today)            
                cy.assertBodyEnquadramento(response.body, dadosPropAgricola.nomeEnquadramento.toUpperCase(), dadosPropAgricola.idEnquadramento, dadosPropAgricola.nomeFinalidadeTipo, dadosPropAgricola.idFinalidade, dadosPropAgricola.tipoProposta)
                cy.assertBodyModalidadeSeguro(response.body, tipoSeguro.idSeguroProAgro, tipoSeguro.segProAgro)
                cy.assertBodyEntidades(response.body, produtorPjCoopUnica.nmCoop, produtorPjCoopUnica.idCoop, produtorPjCoopUnica.nmAgencia, produtorPjCoopUnica.idAgencia)
                cy.assertBodyProdutorRural(response.body, produtorPjCoopUnica.idProdutor, produtorPjCoopUnica.nmProdutor, produtorPjCoopUnica.nrDocumento)

                expect(response.body).property('fonteRecurso').to.eq(null)
                expect(response.body).property('fonteRecursoEnum').to.eq(null)
            }))
          })
    })

    // CENARIO 04 PJ
    it('Cadastrar Proposta Agrícola - Produtor PJ Coop Unica - Seguro OMS', () => {
        cy.acessarAgroMais()

        const vlrFinanciadoHA = parseFloat(dadosPropVlrFinanciado) / parseFloat(dadosPropAgricola.areaBeneficiada)
        const strVlrFinanciadoHA = numberFormat(vlrFinanciadoHA)
        const today = new Date().toISOString().slice(0, 10)

        cy.server()
        cy.route('POST', routePostPropostaAgricola).as('postPropostaAgricola')
        cy.wait(5000)
        cy.acessoPropostasCreate()
        cy.informarDoctoProdutor(produtorPjCoopUnica.nrDocumento)
        cy.tpPropostaAgricolaSelect()
        cy.informarCulturaProposta(dadosPropAgricola.nmCultura)
        cy.informarSeguroProposta(tipoSeguro.segOms)
        cy.informarAreaBeneficiadaProposta(dadosPropAgricola.areaBeneficiada)
        cy.informarVlrTotalFinanciadoProposta(dadosPropVlrFinanciado)
        cy.get('input[id=valor-financiado-por-hectare]').should('have.value', strVlrFinanciadoHA.toString())
        cy.informarQtdParcelasVencProposta(qtdParcAgric)
        cy.enviarProposta()
        
        cy.preencherModalEnvioProposta('Registro gerado via automação de testes')
        cy.wait('@postPropostaAgricola')
        cy.get('@postPropostaAgricola').debug().then((xhr) => {
            expect(xhr.status).to.eq(201)
            expect(xhr.method).to.eq('POST')
            let idProposta = (xhr.response.body.id)
            
            cy.server()
            cy.request({
            method: 'GET', 
            url: routeGetConsultarProposta+idProposta,
            auth:{
                bearer:getTokenId()
            }
            }).then((response => {
                expect(response.status).to.eq(200)
                expect(response.body).property('id').to.eq(idProposta)

                cy.assertBodyUsuario(response.body, usuarioACR.username, usuarioACR.nomeUsuario)
                cy.assertBodyDadosFinanciamentoAgricola(response.body, dadosPropAgricola.areaBeneficiada, strVlrFinanciadoHA, dadosPropVlrFinanciado, qtdParcAgric)
                cy.assertBodyCulturaAtividade(response.body, dadosPropAgricola.nmCultura, dadosPropAgricola.idCulturaAtividade)
                cy.assertBodyStatusProposta(response.body, statusProposta.solicAguardandoAutorizacao)
                // cy.assertBodyDatasProposta(response.body, today, today)            
                cy.assertBodyEnquadramento(response.body, dadosPropAgricola.nomeEnquadramento.toUpperCase(), dadosPropAgricola.idEnquadramento, dadosPropAgricola.nomeFinalidadeTipo, dadosPropAgricola.idFinalidade, dadosPropAgricola.tipoProposta)
                cy.assertBodyModalidadeSeguro(response.body, tipoSeguro.idSeguroOms, tipoSeguro.segOms)
                cy.assertBodyEntidades(response.body, produtorPjCoopUnica.nmCoop, produtorPjCoopUnica.idCoop, produtorPjCoopUnica.nmAgencia, produtorPjCoopUnica.idAgencia)
                cy.assertBodyProdutorRural(response.body, produtorPjCoopUnica.idProdutor, produtorPjCoopUnica.nmProdutor, produtorPjCoopUnica.nrDocumento)

                expect(response.body).property('fonteRecurso').to.eq(null)
                expect(response.body).property('fonteRecursoEnum').to.eq(null)
            }))
          })
    })
});