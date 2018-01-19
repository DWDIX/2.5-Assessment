
const selectors = require('../supporting/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },

    after: browser => {
        browser.end()

    },
    'Evens and Odds': browser => {

        browser
            .setValue(selectors.EOI, '1,2,3')
            .click(selectors.EOB)
            .expect.element(selectors.ER).text.to.contain('2')
    },
    'Filter Object': browser => {
        browser
            .setValue(selectors.OFI, 'name')
            .click(selectors.OFB)
            .expect.element(selectors.OFR).text.to.contain('Jimmy Joe')
        
    
    },

    'filter string' : browser => {
        browser
            .setValue(selectors.NFI, 'a')
            .click(selectors.NFB)
            .expect.element(selectors.NFR).text.to.contain('James')
        


    },

    'filter Palindrome' : browser => {
        browser
            .setValue(selectors.PDI, 'nallan')
            .click(selectors.PDB)
            .expect.element(selectors.PDR).text.to.contain('Palindrome: true')
    },
    'filter Sum' : browser => {
        browser
            .setValue(selectors.SI1, '1')
            .setValue(selectors.SI2, '1')
            .click(selectors.SB)
            .expect.element(selectors.SR).text.to.contain('2')
        
    }


}