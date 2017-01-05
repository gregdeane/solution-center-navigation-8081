/*
  This parent class is needed in order to avoid losing the context (this) when intercepting $http calls since
  we need access to it to reach the injected services:

  http://www.couchcoder.com/angular-1-interceptors-using-typescript/
 */

class HttpInterceptor {
  constructor() {
    ['request', 'requestError', 'response', 'responseError']
        .forEach((method) => {
          if(this[method]) {
            this[method] = this[method].bind(this);
          }
        });
  }
}

class InterceptorService extends HttpInterceptor {
  constructor(ScAuthenticationService) {
    super();
    this.scAuthenticationService = ScAuthenticationService;
  }

  request(config) {
    let token = this.scAuthenticationService.getToken();

    if (token) {
      config.headers['Authorization'] = token;
    }

    return config;
  }

  response(response) {
    let auth = response.headers()['authorization'];

    if (auth && this.scAuthenticationService.getToken() !== auth) {
      this.scAuthenticationService.setToken(auth);
    }

    return response;
  }
}

export default InterceptorService;
