// features/google-search-steps.js
const assert = require('assert');
const { Given, When, Then, AfterAll } = require('cucumber');
const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const driver = new Builder().forBrowser('chrome').build();

Given('I am on the LoginPage', { timeout: 10000 }, async function () {
  await driver.get('https://sysadmin.inspheris.net/');
  await driver.sleep(2000);
});

When('I enter my credentials',{ timeout: 10000 }, async function () {
  
  const username = await driver.findElement(By.id("username"));
  username.sendKeys("user2");
  await driver.sleep(1000);

  const password = await driver.findElement(By.id("password"));
  password.sendKeys("HGTj5h52Buv?");
  await driver.sleep(1000);
});

Then('I log in',{ timeout: 10000 }, async function () {
    await driver.findElement(By.xpath("//button[@value='Se connecter']")).click();
    await driver.sleep(3000);
});

Then('Am on the HomePage',{ timeout: 10000 }, async function () {
    await driver.sleep(3000);
});

AfterAll('end', async function () {
  await driver.quit();
});