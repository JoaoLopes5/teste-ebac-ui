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
    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProdutos(produto)
        cy.get('.product_title').should('contain',  produto)
    });
    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Ariel Roll Sleeve Sweatshirt')
    });
    it('Deve adicionar produto ao carrinho', () => {
        produtosPage.buscarProdutos('Autumn Pullie')
        produtosPage.addProdutoCarrinho('M','Green',5)
        
    });
    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
             produtosPage.buscarProdutos(dados[1].nomeProduto)
        produtosPage.addProdutoCarrinho(dados[1].tamanho,dados[1].cor,dados[1].quantidade)
        cy.get('.product_title').should('contain',dados[1].nomeProduto)
        })
        
    });
});