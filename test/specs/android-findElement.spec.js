describe("Android element test", () => {
  it("should find elements by accessibility id", async () => {
    const appOption = await $("~App");
    await appOption.click();
    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("should find elements by class name", async () => {
    const firstElementWithSameClassname = await $("android.widget.TextView");
    await expect(firstElementWithSameClassname).toHaveText("API Demos");
  });

  it.skip("find element by xpah", async () => {
    (
      await $('//android.widget.TextView[@content-desc="Alert Dialogs"]')
    ).click();
    await $(
      '//android.widget.Button§[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();

    await $('//android.widget.TextView[@text="Command two"]').click();
    const textAssertionElement = await $("//android.widget.TextView");
    await expect(textAssertionElement).toHaveText(
      "You selected: 1 , Command two"
    );
  });
  it("should find elements by uiAutomator", async () => {
    await $('android= new UiSelector().textContains("Alert")').click();
  });

  it("should find elements by uiAutomator", async () => {
    const expectedList = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];
    const actualList = [];
    const textElements = await $$("android.widget.TextView");
    for (const el of textElements) {
      actualList.push(await el.getText());
    }

    await expect(actualList).toEqual(expectedList);
    // await $('android= new UiSelector().textContains("Alert")').click();
  });
  it.only("should type text field", async () => {
    (await $('//android.widget.TextView[@content-desc="Views"]')).click();
    (await $('//android.widget.TextView[@content-desc="Auto Complete"]'))
      .click();
      (
        await $('//android.widget.TextView[@content-desc="1. Screen Top"]')
      )
      .click();
    //    (await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]')).typ
    const textField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]');
    await textField.addValue('canada')
    await expect(textField).toHaveText('canada')
    
  });
});
