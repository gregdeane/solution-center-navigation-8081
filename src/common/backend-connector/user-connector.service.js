class UserConnectorService {
  constructor($http, backendConnectorService) {
    this.$http = $http;
    this.backendConnectorService = backendConnectorService;

    this.baseUrl = this.backendConnectorService.getUserServiceUrl();
  }

  getUserBusinessPartners(userId) {
    let url = `${this.baseUrl}/users/${userId}/business-partners`;

    return this.$http.get(url);
  }
}

export default UserConnectorService;
