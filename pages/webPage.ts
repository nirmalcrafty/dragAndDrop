import { $,by, browser,element, ExpectedConditions } from "protractor";
import { code as dragAndDrop } from "html-dnd";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
const expect = chai.expect;

chai.use(chaiAsPromised);
export class WebPage {
    public async get() {
        await browser.waitForAngularEnabled(false);
        // await browser.driver.manage().window().maximize();
        await browser.get('https://html5demos.com/drag/');
        await expect(await browser.getTitle()).equal('HTML5 Demo: Drag and drop');
    }
    public async dragAndDrop(){
        await browser.wait(ExpectedConditions.visibilityOf($("#one")));
        await browser.executeScript(
            dragAndDrop, $("#one").getWebElement(), $("#bin").getWebElement());
    }

    public async droppedItemInvisible(){
        return await browser.wait(ExpectedConditions.stalenessOf($("#one")));
    }
}