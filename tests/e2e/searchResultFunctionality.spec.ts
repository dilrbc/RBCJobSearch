

import { Dialog, expect } from "@playwright/test";
import test from "../base/baseTest"

import {TC2 as TC2} from '../utility/testData/searchResultPage.json';
import {TC3 as TC3} from '../utility/testData/searchResultPage.json';





test.describe('RBC jobs Search Results page Functionality', () => {

    test.beforeEach(async ({ searchResultPage, jobsMainPage, page, webActions }) => {
        // 1. Navigate to result page
        await searchResultPage.navigateToURL()
        await webActions.waitForPageFullyLoaded()
        await jobsMainPage.acceptAll_btn.click()
    });


    TC2.forEach((item, index) => {

        test(`TC2 Verify Search Functionality ${TC2[index].type}`, {
            annotation:{
                type:'Test Cases',
                description:'https://weCanLinkJiraTicketsHere'

        }},async ({
             
             webActions,
             context,
             jobsMainPage,
             searchResultPage,
             page
        
        
            }) => {

                // Objective: Ensure the search box and search button function correctly.
                // Test Steps and Expected Outcomes:
                // Step 1: Navigate to the search results page (https://jobs.rbc.com/ca/en/search-results?keywords=).
                // Expected Outcome 1: The search results page loads successfully.
                expect.soft(page.url()).toEqual(searchResultPage.url)
                await expect.soft(searchResultPage.filterSearch_box).toBeVisible()

                // Step 2: Enter a job title or location in the search box (e.g., "SDET").
                await searchResultPage.filterSearch_box.fill(TC2[index].input1)
                // Step 3: Click the search button.
                await searchResultPage.filterSearchIcon_btn.click()
                // Expected Outcome 3: The page displays job cards relevant to the "Software Engineer" search query.
                await page.waitForTimeout(2000)

                if(TC2[index].type=="Title"){

                    const firstResultHeader = await searchResultPage.resultHeading_lists.first().textContent()
                    expect.soft(firstResultHeader).toContain(TC2[index].input1)


                }else if(TC2[index].type=="Location") {

                    const firstResultLocation = await searchResultPage.resultLocation_lists.first().textContent()
                    expect.soft(firstResultLocation).toContain(TC2[index].input1)
                    
                }
                

        })


    })


    TC3.forEach((item, index) => {

        test(`TC3 Verify Filter Functionality ${TC2[index].type}`, {
            annotation:{
                type:'Test Cases',
                description:'https://weCanLinkJiraTicketsHere'

        }},async ({
             
             webActions,
             context,
             jobsMainPage,
             searchResultPage,
             page
        
        
            }) => {

                // Objective: Check if selecting filters updates the job results correctly.
                // Test Steps and Expected Outcomes:

                // Step 1: Navigate to the search results page.
                // Expected Outcome 1: The search results page loads successfully.
                expect.soft(page.url()).toEqual(searchResultPage.url)
                await expect.soft(searchResultPage.filterSearch_box).toBeVisible()

                // Step 2: Expand the 'Refine your search' sidebar.
                // Expected Outcome 2: The sidebar is expanded showing various filter options. Verify the categoreis options:
                await expect.soft(searchResultPage.category_dropdown).toBeVisible()
                await expect.soft(searchResultPage.subCategory_dropdown).toBeVisible()
                await expect.soft(searchResultPage.platform_dropdown).toBeVisible()
                await expect.soft(searchResultPage.careerLevel_dropdown).toBeVisible()
                await expect.soft(searchResultPage.employmentType_dropdown).toBeVisible()
                await expect.soft(searchResultPage.jobType_dropdown).toBeVisible()
                await expect.soft(searchResultPage.country_dropdown).toBeVisible()
                await expect.soft(searchResultPage.stateProvince_dropdown).toBeVisible()
                await expect.soft(searchResultPage.city_dropdown).toBeVisible()


                // Step 3: Select various filters under different categories (e.g., Job Type, Location).
                //Category
                await searchResultPage.category_dropdown.click()
                await page.getByRole('checkbox', { name: TC3[index].category}).click()
                await searchResultPage.category_dropdown.click()
                //City
                await searchResultPage.city_dropdown.click()
                await page.getByPlaceholder('Search in city').click()
                await page.getByPlaceholder('Search in city').fill(TC3[index].city)
                await page.getByRole('checkbox', { name: TC3[index].city}).click()
                await page.waitForTimeout(2000)
                // Expected Outcome 3: The selected filters are applied.
                // Step 4: Apply the filters.
                // Expected Outcome 4: Only job cards matching the selected filters are displayed.
                //verify city
                const firstResultLocation = await searchResultPage.resultLocation_lists.first().textContent()
                expect.soft(firstResultLocation).toContain(TC3[index].city)
                //verify Category
                const firstResultCategory = await searchResultPage.resultCategory_lists.first().textContent()
                expect.soft(firstResultCategory).toContain(TC3[index].category)

        })


    })

  

    
})













