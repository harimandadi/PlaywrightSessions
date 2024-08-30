class Loginpagecheck  {
    constructor(page) {
        this.page = page;
        const username = page.locator("//input[@name='name']");
    }

    async navigateTo() {
        await this.page.goto('https://www.automationexercise.com/login');
    }

    async enterUsername(username) {
        await this.page.fill("//input[@name='name']", username);
    }

    async enterPassword(password) {
        await this.page.fill("//input[@name='email' and @data-qa='signup-email']", password);
    }

    async clickLoginButton() {
        await this.page.click("//button[@data-qa='signup-button']");
    }

    async login(username, password) {
       // await this.enterUsername(username);
       await this.username.fill(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}
module.exports = Loginpagecheck;