

describe("ColorNote app", () => {
  it("should open the app", async () => {
    await $(
      '//android.widget.Button[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    ).click();

    

    await expect($('//*[@text="Add note"]')).toExist();
  
  });
  it("add note", async () => {
    await $(
      '//android.widget.ImageView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/img_add"]'
    ).click();
    await $(
      '//android.widget.ListView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/select_dialog_listview"]/android.widget.LinearLayout[1]'
    ).click();
    // await $('//*[@text="Editing"]').toExist
    await expect($('//*[@text="Editing"]')).toExist();

    await $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']"
    ).setValue("fav anime list"); // setValue clear the value before adding it, addValue adds directly
    await $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']"
    ).addValue("naruto\nonePiece\nsomething"); // setValue clear the value before adding it, addValue adds directly

    await driver.back()
    await driver.back()
    
        await driver.pause(3000)

    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toExist()
  

  });
  it('delete the note', async() => {
    await $('~More').click()
    await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Delete"]').click()
    await driver.pause(3000)
    await expect($('//android.widget.Button[@resource-id="android:id/button1"]')).toExist()
    await $('//android.widget.Button[@resource-id="android:id/button1"]').click()
    await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
    await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Trash Can"]').click()
    await expect($('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')).toHaveText('fav anime list')

  });
});
