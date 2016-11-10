import angular from 'angular';

import HelpComponent from './help.component';
import HelpService from './help.service';

const helpModule =
          angular.module('components.help', [])
              .component('help', HelpComponent)
              .service('helpService', HelpService);

export default helpModule.name;
