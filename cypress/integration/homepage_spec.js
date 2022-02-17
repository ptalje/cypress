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

describe('Show password', () => {
    it('Toggles display password', () => {
        cy.login(`${valid_name}`, `${invalid_password}`)
        cy.get('div[class="wp-pwd"] button').click()
        cy.get('div[class="wp-pwd"] input[type="text"]').contains(`${invalid_password}`)
    })
})