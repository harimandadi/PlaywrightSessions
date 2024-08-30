/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */
const { test, expect } = require('@playwright/test');
const LoginPageCheck = require('../pageObjects/Loginpagecheck');
const data = JSON.parse(JSON.stringify(require("../testdata/login.json"))); 


test('Login page Testing', async ({ page }) => {

    const loginPage = new LoginPageCheck(page);
    await loginPage.navigateTo();
    loginPage.login(data.name,data.email); 
});