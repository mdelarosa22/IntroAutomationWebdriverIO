const { assert } = require('chai');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        //expect(browser).toHaveTitle('WebdriverIO · Next-gen browser automation test framework for Node.js');
        //assert.strictEqual(title,'WebdriverIO · Next-gen browser automation test framework for Node.js','no concide el titulo');
        assert.strictEqual(title,'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js','no concide el titulo');
    })
})