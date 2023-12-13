const ItemScreen = require("../../screenobjects/ios/item.screen");
// const ListScreen = require("../../screenobjects/ios/list.screen");
import ListScreen from "../../screenobjects/ios/list.screen"

describe("real app", () => {
  before(async() => {
    await ListScreen.createListButton.click();
    await ListScreen.listNameInput.addValue(
      "something"
    );
    await ListScreen.createButton.click();
    await expect(ListScreen.listNameField('something')).toExist();
    await ListScreen.listNameField('something').click();
  });
  it.only("create toDoList and item ", async () => {
    //add those into before hook
    // await $('//*[@name="Create list"]').click();
    // await $('//XCUIElementTypeTextField[@value="List Name"]').addValue(
    //   "something"
    // );
    // await $("~Create").click();
    
    // await expect(await $("~something")).toExist();
    // await ListScreen.listNameField('something').click();
    
    
    await ItemScreen.createItem.click();
    await ItemScreen.titleField.addValue("first item");
    await ItemScreen.dueField.click();
    await ItemScreen.dueField
    
    await browser.touchAction({
        action: "tap",
        x: 54,
        y: 913,
    });
    await $("~14").click();
    await browser.touchAction({
        action: "tap",
        x: 231,
        y: 419,
    });
    await $("~Create").click();
    await expect(await $("~first item")).toExist()


  });
});

