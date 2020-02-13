module.exports = {
    'entering valid username only'(browser) {
        const page = browser.page.signup();
        var username = Math.random().toString(36).substring(7);
        page
            .navigate()
            .waitForElementIsDisplayed('@homePageHeader')
            .click('@SignUpLink')
            .waitForElementIsDisplayed('@signUpPageHeader')
        page.useXpath().setValue('@username', username);
        page.click('@signUpButton')
        page.expect.element('@erroMessage').to.be.present
        page.expect.element('@erroMessage').to.be.visible
        page.end();
    },

    'entering no data'(browser) {
        const page = browser.page.signup();
        page
            .navigate()
            .waitForElementIsDisplayed('@homePageHeader')
            .click('@SignUpLink')
            .waitForElementIsDisplayed('@signUpPageHeader')
        page.click('@signUpButton')
        page.expect.element('@erroMessage').to.be.present
        page.expect.element('@erroMessage').to.be.visible
        browser.end();
    },
    'entering valid password only'(browser) {
        const page = browser.page.signup();
        var password = Math.random().toString(36);
        page
            .navigate()
            .waitForElementIsDisplayed('@homePageHeader')
            .click('@SignUpLink')
            .waitForElementIsDisplayed('@signUpPageHeader')
        page.click('@signUpButton')
        page.useXpath().setValue('@password', password);
        page.click('@signUpButton')
        page.expect.element('@erroMessage').to.be.present
        page.expect.element('@erroMessage').to.be.visible
        browser.end();
    },

    'entering all valid data'(browser) {
        const page = browser.page.signup();
        var username = Math.random().toString(36).substring(7);
        var email = Math.random().toString(36).substring(7) + '@' + Math.random().toString(30).substring(7) + '.com';
        var password = Math.random().toString(36);

        page
            .navigate()
            .waitForElementIsDisplayed('@homePageHeader')
            .click('@SignUpLink')
            .waitForElementIsDisplayed('@signUpPageHeader')
        page.useXpath().setValue('@username', username);
        page.useXpath().setValue('@email', email);
        page.useXpath().setValue('@password', password);
        page.click('@signUpButton')
        page.expect.element('@YourFeedHeader').to.be.present
        page.expect.element('@YourFeedHeader').to.be.visible
        page.expect.element('@GlobalFeedHeader').to.be.present
        page.expect.element('@GlobalFeedHeader').to.be.visible
    }
}