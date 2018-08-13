import { After, AfterAll, Before, BeforeAll, setDefaultTimeout, Status } from "cucumber";

import { browser } from "protractor";
import { WebPage } from "../pages/webPage";

const sessionId = browser.sessionId;

const loginPage: WebPage = new WebPage();


BeforeAll(() => {
    setDefaultTimeout(100000);
});

Before(async (scenario) => {
    console.log("Before scenario");
})
After(async (scenario) => {
    console.log("after scenario");
})
