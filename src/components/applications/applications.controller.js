class ApplicationsController {
  constructor(applicationsService) {
    this.applicationsService = applicationsService;

    this.currentApplicationId = this.applicationsService.getCurrentApplicationId();
  }

  navigateToApplication(selectedApplication) {
    this.applicationsService.navigateToApplication(selectedApplication, this.products, this.userBusinessPartners);
  }

  isCurrentApplication (applicationId) {
    return this.currentApplicationId === applicationId;
  }
}

export default ApplicationsController;
