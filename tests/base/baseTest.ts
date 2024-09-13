import {test as baseTest, expect} from '@playwright/test';

import WebActions from './webActions';

import JobsMainPage from '../pages/jobsMainPage';
import SearchResultPage from '../pages/searchResultPage';




const test = baseTest.extend<{

    webActions: WebActions;
    jobsMainPage: JobsMainPage;
    searchResultPage: SearchResultPage;
    
    
    
}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    jobsMainPage: async ({ page, context }, use) => {
        await use(new JobsMainPage(page, context));
    },
    searchResultPage: async ({ page, context }, use) => {
        await use(new SearchResultPage(page, context));
    },

})

export default test;