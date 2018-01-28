import * as nightwatch from "nightwatch";

const test = {
  "Calculator pow e2e test example": (browser: nightwatch.NightwatchBrowser) => {
    browser
      .url("http://localhost:8080/")
      .waitForElementVisible("body", 1000)
      .assert.title("TypeScriptTesting")
      .waitForElementVisible("input#base", 1000)
      .assert.visible("input#base")
      .assert.visible("input#exponent")
      .setValue("input#base", "2")
      .setValue("input#exponent", "3")
      .click("button#submit")
      .pause(500)
      .assert.value("input#result", "8")
      .end();
  }
};

export = test;
