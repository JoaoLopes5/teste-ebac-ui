/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";


describe('Funcionalidade produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    it('Deve selecionar um produto da lista', () => {
      produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain','Abominable Hoodie')

        
    });
    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProdutos(produto)
        cy.get('.product_title').should('contain', produto)
    });
    it('Deve visitar a página do produto', () => {
        
    });
    it('Deve adicionar produto ao carrinho', () => {
        
    });
});