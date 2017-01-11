import '../src/vendor';
import 'angular-mocks';

// this line removes the `import` requirement in spec files.
// i.e. you no longer need to include `index.js` in any spec files.
import '../src/index';

const context = require.context('../src', true, /\.spec\.js/);
context.keys().forEach(context);
