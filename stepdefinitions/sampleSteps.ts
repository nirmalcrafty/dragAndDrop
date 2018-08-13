import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { Given, Then, When } from "cucumber";
import { $,by, browser,element, ExpectedConditions } from "protractor";
import { WebPage } from "../pages/webPage";
const expect = chai.expect;

chai.use(chaiAsPromised);

const webPage: WebPage = new WebPage();
Given("I open the page",{ timeout: 100000 }, async () => {
   await webPage.get();
});

When("I drag and drop", { timeout: 100000 },async () => {
    await webPage.dragAndDrop();
    
});


Then("I should not see the box", { timeout: 100000 },async () => {
    await expect(webPage.droppedItemInvisible()).to.eventually.be.true;
    await browser.sleep(10000);
    
});