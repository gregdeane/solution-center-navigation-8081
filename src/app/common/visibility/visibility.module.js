import VisibilityActions from './visibility.actions';

const VisibilityModule = angular.module('common.visibility', [])
  .factory('VisibilityActions', VisibilityActions);

export default VisibilityModule.name;
