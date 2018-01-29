import { NightwatchBrowser } from "nightwatch";

const test = {
  "Calculator pow e2e test example": (browser: NightwatchBrowser) => {
    browser
      .url("http://localhost:3000/")
      .waitForElementVisible("body", 1000)
      .assert.title("Calculator")
      .assert.visible("#base")
      .assert.visible("#exponent")
      .clearValue("#base")
      .setValue("#base", "2")
      .clearValue("#exponent")
      .setValue("#exponent", "3")
      .click("#submit_btn")
      .pause(500)
      .assert.containsText("#result", "8")
      .end();
  }
};

export = test;
