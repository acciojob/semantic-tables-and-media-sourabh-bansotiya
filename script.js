//your code here

// Assuming your test file is test.spec.js

describe('Media Table and List', () => {
  beforeEach(() => {
    cy.visit('/main.html'); // Update the path accordingly
  });

  it('should have a semantically correct table', () => {
    cy.get('table').within(() => {
      cy.get('thead th').should('have.length', 2);
      cy.get('tbody tr').should('have.length', 3);
      cy.get('tbody td').should('have.length', 6);
    });
  });

  it('should have a heading and a list of medias', () => {
    cy.contains('List of medias');
    cy.get('ol li').should('have.length', 3);

    cy.get('ol li:first img')
      .should('have.attr', 'src', 'https://picsum.photos/id/123/200/300')
      .should('have.attr', 'alt', 'rain');

    cy.get('ol li:nth-child(2) video source')
      .should('have.attr', 'src', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');

    cy.get('ol li:last audio source')
      .should('have.attr', 'src', 'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg');
  });
});

