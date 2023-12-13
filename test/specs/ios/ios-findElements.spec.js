describe("Ios find element", () => {
  it("by accessibiility id", async () => {
    await $("~Alert Views").click();
    await $("~Simple").click();
    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best"
    );
    await driver.acceptAlert();
  });
  it("by tag name", async () => {
    //single element
    console.log(await $("XCUIElementTypeStaticText").getText());

    //multiple element
    const textEl = await $$("XCUIElementTypeStaticText");
    for (const text of textEl) {
      console.log(await text.getText());
    }

    // await $('~Alert Views').click()
    // await $('~Simple').click()
    // await expect( await driver.getAlertText()).toContain('A Short Title Is Best')
    // await driver.acceptAlert()
  });

  it("by xpath", async () => {
    await driver.back();
    await $(
      "//XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther"
    ).click();
    await $('//XCUIElementTypeStaticText[@name="Simple"]').click();

    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best"
    );
    await driver.acceptAlert();
  });

  it("by classChain", async () => {
    await driver.back();
    const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]';
    await $(`-ios class chain:${alertText}`).click();
    await $('//XCUIElementTypeStaticText[@name="Simple"]').click();

    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best"
    );
    await driver.acceptAlert();
  });
  it("by predicate string", async () => {
    await driver.back();
    // const alertText = 'name == "Alert Views"';
    const alertText = 'value BEGINSWITH[c] "alert"';
    await $(`-ios predicate string:${alertText}`).click();
    await $('//XCUIElementTypeStaticText[@name="Simple"]').click();

    await expect(await driver.getAlertText()).toContain(
      "A Short Title Is Best"
    );
    await driver.acceptAlert();
  });
  it("input field", async () => {
    await $("~Search").click();
    await $("~DefaultSearchBarViewController").click();
    await $("XCUIElementTypeSearchField").addValue("hola");
    await expect($("//XCUIElementTypeSearchField")).toHaveAttr("value");
    await $("~Clear text").click();
    await expect($("//XCUIElementTypeSearchField")).not.toHaveAttr("value");
  });
});
