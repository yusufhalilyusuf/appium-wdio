const ListScreen = require("../../screenobjects/ios/list.screen");

describe("real app", () => {
  it("first ", async () => {
    await ListScreen.createListButton.click();
    await ListScreen.listNameInput.addValue(
      "something"
    );
    await ListScreen.createButton.click();
    await expect(ListScreen.listNameField('something')).toExist();
  });
});
