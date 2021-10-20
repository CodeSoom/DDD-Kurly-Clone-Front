describe('User flow', () => {
  it('shows all user flows', () => {
    // TODO: start with main page and select product.
    cy.visit('http://localhost:3000/products/1');

    cy.contains('h2', '샤인마토 500g');

    cy.contains('a', '주문 하러가기').click();

    cy.contains('h2', '주문서');

    cy.contains('button', '주문 하기').click();

    cy.contains('h2', /주문이 완료되었습니다/);

    cy.contains('a', '쇼핑 계속하기').click();

    cy.url().should('include', '/');
  });
});
