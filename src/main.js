import * as environment from '../config/environment.json';
import {PLATFORM} from 'aurelia-pal';

// import boostrap js as a global dependency
import 'bootstrap/dist/js/bootstrap.bundle';

// import bootstap css as a global dependency
import 'bootstrap/dist/css/bootstrap.css';

// import bootstrap icons as a global dependency
import 'bootstrap-icons/font/bootstrap-icons.css';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
