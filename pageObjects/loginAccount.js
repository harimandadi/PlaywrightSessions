
class loginAccount{
   constructor(page) {
    this.page = page
   const emailAddresseditbox =  this.page.locator("//input[@data-qa='login-email']");
   const passwordeditbox = this.page.locator("//input[@data-qa='login-password']");
   const loginBtn = this.page.locator("//button[text()='Login' and @type='submit']");
   
}
   async login(username,password) {
   await this.emailAddresseditbox.fill(username);
   await this.passwordeditbox.fill(password);

   }
   async naviagteTo(){
   await this.page.goto("https://www.automationexercise.com/login");
   }
}

module.exports = loginAccount;
