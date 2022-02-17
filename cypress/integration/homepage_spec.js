const invalid_name = 'root'
const invalid_email = 'info@@yahoo.com'
const invalid_password = 'changeme'
const valid_name = 'ptalje'
describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('blog') // change URL to match your dev URL
    })
  })

describe('Form wrong name', () => {
    it('enters invalid name', () => {
        cy.login(`${invalid_name}`, `${invalid_password}`)
        cy.get('input[id="wp-submit"]').click()
        cy.get('div[id="login_error"] strong').last().contains(`${invalid_name}`)
        cy.get('div[id="login_error"]').contains('is not registered')
    })
})

describe('Form wrong password', () => {
    it('enters invalid password', () => {
        cy.login(`${valid_name}`, `${invalid_password}`)
        cy.get('input[id="wp-submit"]').click()
        cy.get('div[id="login_error"] strong').last().contains(`${valid_name}`)
        cy.get('div[id="login_error"]').contains('password you entered').contains('incorrect')
    })
})

describe('Toggle show password', () => {
    it('Toggles display password after entering password', () => {
        cy.login(`${valid_name}`, `${invalid_password}`)
        cy.get('input[id="user_pass"][type="password"]')
        cy.get('div[class="wp-pwd"] button').click()
        cy.get('input[id="user_pass"][type="text"]')
        cy.get('div[class="wp-pwd"] button').click()
        cy.get('input[id="user_pass"][type="password"]')
    })
})