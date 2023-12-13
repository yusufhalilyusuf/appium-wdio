describe("ios native", () => {
  it("work wiht alert box", async () => {
    await $("~Alert Views").click();
    await $("~Okay / Cancel").click();

    //click ok
    await $("~OK").click();

    await expect(driver.isAlertOpen).toBeFalsy();
  });

  it("vertical scroll", async () => {
    // await driver.back()
    // await driver.execute("mobile:scroll", { direction: "down" });
    // await driver.execute("mobile:scroll", { direction: "up" });

    //complex scenario if you need to scroll down on specific column, you need to pass element id

    await $("~Picker View").click();
    const firsRow = await $("~Red color component value");
    const secondRow = await $("~Blue color component value");
    await driver.execute("mobile:scroll", {
      element: firsRow.elementId,
      direction: "down",
    });
    await driver.execute("mobile:scroll", {
      element: secondRow.elementId,
      direction: "up",
    });
  });
  it.only("vertical scroll add value", async () => {
  

    await $("~Picker View").click();
    const redPicker = await $("~Red color component value");
    const greenPicker = await $("~Green color component value");
    const bluePicker = await $("~Blue color component value");
    // await driver.execute("mobile:scroll", {
    //   element: firsRow.elementId,
    //   direction: "down",
    // });
    // await driver.execute("mobile:scroll", {
    //   element: secondRow.elementId,
    //   direction: "up",
    // });

    //set purple colour (125, 0, 125)
    redPicker.addValue(125)
    greenPicker.addValue(0)
    bluePicker.addValue(125)

    await driver.pause(3000)
  });
});
