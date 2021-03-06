// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*
Cypress.Commands.add('login', (username, password) => {
    cy.log(username)
    cy.log('***')
    cy.log(password)
    cy.getCookies().then(cookies => {
        let hasMatch = false;
        cookies.forEach((cookie) => {
            if (cookie.name.substr(0, 20) === 'wordpress_logged_in_') {
                hasMatch = true;
            }
        });
        if (!hasMatch) {
            cy.visit('blog/wp-login.php').wait(1000);
            cy.get('#user_login').type(username);
            cy.get('#user_pass').type(`${password}{enter}`);
        }
    });
});
*/
