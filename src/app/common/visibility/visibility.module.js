import VisibilityActions from './visibility.actions';
import VisibilityService from './visibility.service';

const VisibilityModule = angular.module('common.visibility', [])
  .factory('VisibilityActions', VisibilityActions)
  .service('VisibilityService', VisibilityService);

export default VisibilityModule.name;
