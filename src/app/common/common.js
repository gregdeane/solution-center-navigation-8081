import BackendConnectorService from './backend-connector/backend-connector.service';
import ModuleConnectorService from './backend-connector/module-connector.service';
import InterceptorService from './security/interceptor.service';
import VisibilityModule from './visibility/visibility.module';
import StateHandlerService from './state-handler/state-handler.service';

const commonModule =
  angular.module('common', [
    'solutioncenter.login',
    'ngCookies',
    VisibilityModule
  ])
  .service('interceptorService', InterceptorService)
  .service('backendConnectorService', BackendConnectorService)
  .service('moduleConnectorService', ModuleConnectorService)
  .service('stateHandlerService', StateHandlerService)
  .config(($httpProvider) => {
    $httpProvider.interceptors.push('interceptorService');
  });

export default commonModule.name;
