describe('ios webview', () => {
    it('working wiht dynamic webview', async() => {
        await $('~Webview').click()

     
        //get context
        await driver.waitUntil(async()=>{
            const contexts = await driver.getContexts();
            return contexts.length ==2
        },{interval:1000, timeoutMsg:"timed out waited too much"})
        const contexts = await driver.getContexts();
        
        //switch context to webview
        await driver.switchContext(contexts[1])
        await driver.pause(1000)
        await driver.getContext();
        //assert
        const subtitleTExt = await $('.hero__subtitle')
        await expect ( subtitleTExt).toHaveText(expect.stringContaining('mobile'))

        //switch back to native
        await driver.switchContext(contexts[0])
        await $('~Home').click()
        const wdText = await $('//*[@name="WEBDRIVER"]')
        await expect(wdText).toBeDisplayed()

    });
});