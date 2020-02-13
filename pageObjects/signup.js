module.exports = {
    url: 'http://localhost:4100/',
    elements: {
        SignUpLink: {
            selector: '//*[@id="root"]/div/nav/div/ul/li[3]/a',
            locateStrategy: 'xpath'
        },
        signUpPageHeader: {
            selector: '//*[@id="root"]/div/div/div/div/div/h1',
            locateStrategy: 'xpath'
        },
        homePageHeader: {
            selector: '//*[@id="root"]/div/div/div[1]/div/h1',
            locateStrategy: 'xpath'
        },
        username: {
            selector: '//*[@id="root"]/div/div/div/div/div/form/fieldset/fieldset[1]/input',
            locateStrategy: 'xpath'
        },
        password: {
            selector: '//*[@id="root"]/div/div/div/div/div/form/fieldset/fieldset[3]/input',
            locateStrategy: 'xpath'
        },
        email: {
            selector: '//*[@id="root"]/div/div/div/div/div/form/fieldset/fieldset[2]/input',
            locateStrategy: 'xpath'
        },

        signUpButton: {
            selector: '//*[@id="root"]/div/div/div/div/div/form/fieldset/button',
            locateStrategy: 'xpath'
        },
        erroMessage: {
            selector: '//*[@id="root"]/div/div/div/div/div/ul',
            locateStrategy: 'xpath'
        },
        YourFeedHeader: {
            selector: '//*[@id="root"]/div/div/div/div/div[1]/div[1]/ul/li[1]/a',
            locateStrategy: 'xpath'
        },
        GlobalFeedHeader: {
            selector: '//*[@id="root"]/div/div/div/div/div[1]/div[1]/ul/li[2]/a',
            locateStrategy: 'xpath'
        }
},
    commands: [{
        enterData(selector, value) {
            return this;
            page.useXpath().setValue(selector, value);
        },
        waitForElementIsDisplayed(selector) {
            return this;
            page.waitForElementVisible(selector);
        }
    }]
};