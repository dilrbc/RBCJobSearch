import {test as baseTest, expect} from '@playwright/test';


import JobsMainPage from '../pages/jobsMainPage';
import WebActions from './webActions';


const test = baseTest.extend<{

    webActions: WebActions;
    jobsMainPage: JobsMainPage;
    
    
    
}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    jobsMainPage: async ({ page, context }, use) => {
        await use(new JobsMainPage(page, context));
    },

})

export default test;