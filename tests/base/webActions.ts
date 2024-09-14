import { BrowserContext, Locator, Page, _baseTest, expect } from "@playwright/test";

export default class WebActions {
    page: Page;
    context: BrowserContext;

    constructor(page:Page,context: BrowserContext){
        this.page = page;
        this.context = context;
    }


    async waitForPageFullyLoaded(){
        await this.page.waitForTimeout(3000)
        //await this.page.evaluate(() => document.fonts.ready);
        await this.page.waitForLoadState('domcontentloaded')
        //await this.page.waitForEvent('requestfinished')
        //await this.page.waitForEvent('response')
    }


    async scrollIntoView (locatorArea : Locator, targetlocator : Locator) {
        let i = 0;
        while(await targetlocator.isHidden()) {
            await locatorArea.hover()
            //await locatorArea.click();
            await this.page.mouse.wheel(0, 6000);
            await this.page.waitForTimeout(1000)
            //await this.page.waitForTimeout(4000)
            i++;
            if (await targetlocator.isVisible()) { return; }
            else if (i >= 20) { return; }
        }
        
    }


    async scrolltotheEnd() {
        await this.page.keyboard.press('End')
    }




   
    



}