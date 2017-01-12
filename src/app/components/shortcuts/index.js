import angular from 'angular';

import ShortcutsComponent from './shortcuts.component';

const shortcutsModule =
          angular.module('components.shortcuts', [])
              .component('shortcuts', ShortcutsComponent);

export default shortcutsModule.name;
