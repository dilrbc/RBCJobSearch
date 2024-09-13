import { expect, Locator, Page, BrowserContext } from "@playwright/test";


export default class JobsMainPage {
    url = 'https://jobs.rbc.com/ca/en'
    
    rbcLogo: Locator;
    lifeAtRBC_pageLink: Locator;
    workAtRBC_pageLink: Locator;
    studentGraduates_pageLink: Locator;
    talentCommunity_pageLink: Locator;
    languageFrench_pageLink: Locator;
    savedJobs_pageLink: Locator;
    seachJobs_box: Locator;
    search_btn: Locator;
    acceptAll_btn: Locator;
    viewAllJobs_pageLink: Locator;

    
    

    constructor(private page:Page, context: BrowserContext){
        

        // Header Section elements
        this.rbcLogo = page.getByLabel('RBC Careers Home Page')
        this.lifeAtRBC_pageLink = page.getByRole('link', { name: 'Life at RBC' })
        this.workAtRBC_pageLink = page.getByRole('link', { name: 'Work at RBC' })
        this.studentGraduates_pageLink = page.getByRole('link', { name: 'Students & Graduates' })

        this.talentCommunity_pageLink = page.getByRole('link', { name: 'Talent Community' })
        this.languageFrench_pageLink = page.getByRole('link', { name: 'Redirects to French Version' })
        this.savedJobs_pageLink = page.getByRole('link', { name: 'Redirects to Job Cart Page' })

        //main body elements
        this.seachJobs_box = page.getByPlaceholder('Search for Job title or Location')
            this.search_btn = page.getByLabel('find jobs')

        //footer section elements;
        this.viewAllJobs_pageLink = page.getByRole('link', { name: 'View All Jobs' })


        //other Elements 
        this.acceptAll_btn = page.getByRole('button', { name: 'Accept All Cookies' })





        


        
    }

    // =================Page Spesific Fuctions==================

    async navigateToURL(){
        
        await this.page.goto(this.url)
        await this.page.waitForURL(this.url)
    }




}