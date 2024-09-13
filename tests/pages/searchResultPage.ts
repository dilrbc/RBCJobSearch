import { expect, Locator, Page, BrowserContext } from "@playwright/test";


export default class SearchResultPage {
    url = 'https://jobs.rbc.com/ca/en/search-results?keywords='
    
    filterSearch_box: Locator;
    filterSearchIcon_btn: Locator;
    resultHeading_lists: Locator;
    category_dropdown: Locator;
    subCategory_dropdown: Locator;
    platform_dropdown: Locator;
    careerLevel_dropdown: Locator;
    employmentType_dropdown: Locator;
    jobType_dropdown: Locator;
    country_dropdown: Locator;
    stateProvince_dropdown: Locator;
    city_dropdown: Locator;
    resultLocation_lists: Locator;
    resultCategory_lists: Locator;
    

    
    

    constructor(private page:Page, context: BrowserContext){
        

        // Header Section elements
        // same as landing page

        //Main body elements
        //Serach results section
        this.filterSearch_box = page.getByPlaceholder('Search from below list')
            this.filterSearchIcon_btn = page.getByLabel('Facet Results block').locator('form span').nth(1)
        
        this.resultHeading_lists = page.locator('[data-ph-at-id="jobs-list"]>li').locator('[role="heading"]')
            this.resultLocation_lists = page.locator('[data-ph-at-id="jobs-list"]>li').locator('[class="job-location"]')
            this.resultCategory_lists = page.locator('[data-ph-at-id="jobs-list"]>li').locator('[class="au-target category"]')

            //class="au-target category"
        //Refine your search section
        this.category_dropdown = page.getByRole('button', { name: 'Category', exact: true })
        this.subCategory_dropdown = page.getByRole('button', { name: 'Sub Category' })
        this.platform_dropdown = page.getByRole('button', { name: 'Platform' })
        this.careerLevel_dropdown = page.getByRole('button', { name: 'Career Level' })
        this.employmentType_dropdown = page.getByRole('button', { name: 'Employment Type' })
        this.jobType_dropdown = page.getByRole('button', { name: 'Job Type' })
        this.country_dropdown = page.getByRole('button', { name: 'Country' })
        this.stateProvince_dropdown = page.getByRole('button', { name: 'State / Province' })
        this.city_dropdown = page.getByRole('button', { name: 'City' })

        




        


        
    }

    // =================Page Spesific Fuctions==================

    async navigateToURL(){
        
        await this.page.goto(this.url)
        await this.page.waitForURL(this.url)
    }




}