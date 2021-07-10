import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

const moduleIds = {
  'helloWorld': PLATFORM.moduleName('resources/hello-world/hello-world')
}

export class App {
  configureRouter(config, router) {
    config.title = 'Bootstrap Skeleton';
    config.map([
      { route: ['', 'hello'], moduleId: moduleIds.helloWorld, title: 'Hello' }
    ]);

    this.router = router;
  }
}
