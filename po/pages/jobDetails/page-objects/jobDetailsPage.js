const selectors = require('../selectors.json');

class JobDetailsPage {
    constructor(
        url = "https://www.epam.com/careers/job-listings/job"
    ) { this.url = url };

    async isJobDetailsPageLoaded() {
        const jobDescription = await page.locator(selectors["Job Description"]);
         return jobDescription.isVisible();
    }
}

module.exports = JobDetailsPage;