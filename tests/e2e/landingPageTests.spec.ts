

import { Dialog, expect } from "@playwright/test";
import test from "../base/baseTest"

import {landingPage as landingPage} from '../utility/testData/landingPage.json';
test.describe('RBC jobs landing page Functionality', () => {



    test.beforeEach(async ({ jobsMainPage, page, webActions  }) => {
        // 1. Navigate to mainPage
        await jobsMainPage.navigateToURL()
        await webActions.waitForPageFullyLoaded()
        await jobsMainPage.acceptAll_btn.click()

        
    });


    landingPage.forEach((item, index) => {

        test(`TC1 Verify Link Navigation ${index+1}`, {
            annotation:{
                type:'Test Cases',
                description:'https://weCanLinkJiraTicketsHere'

        }},async ({
             
             webActions,
             context,
             jobsMainPage,
             page
        
        
            }) => {

            // Objective: Ensure that clicking the "View All Jobs" link navigates to the correct page.

            // Test Steps and Expected Outcomes:
            // Step: Navigate to the landing page (https://jobs.rbc.com/ca/en).
            // Expected Outcome: The landing page loads successfully.
            await expect.soft(jobsMainPage.rbcLogo).toBeVisible()
            await expect.soft(jobsMainPage.search_btn).toBeVisible()

            // Step: Scroll to the footer.
            await jobsMainPage.viewAllJobs_pageLink.scrollIntoViewIfNeeded()
            // Expected Outcome: The footer becomes visible, displaying the "View All Jobs" link.
            await expect.soft(jobsMainPage.viewAllJobs_pageLink).toBeVisible()

            // Step: Click on the "View All Jobs" link.
            await jobsMainPage.viewAllJobs_pageLink.click()
            // Expected Outcome: Browser navigates to https://jobs.rbc.com/ca/en/search-results?keywords= and the search results page loads successfully.
            await webActions.waitForPageFullyLoaded()
            expect.soft(page.url()).toEqual('https://jobs.rbc.com/ca/en/search-results?keywords=')

        })


    })





    
})













