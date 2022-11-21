const selectors = require('../selectors.json');

class JobDetailsPage {
    constructor(
        url = "https://www.epam.com/careers/job-listings/job"
    ) { this.url = url };

    async isJobDetailsPageLoaded() {
        return page.locator(selectors["Job Description"]).isVisible();
    }
}

module.exports = JobDetailsPage;