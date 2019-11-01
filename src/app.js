import { PLATFORM } from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Bootstrap Skeleton';
    config.map([
      { route: ['', 'hello'], moduleId: PLATFORM.moduleName('hello-world/hello-world'), title: 'Hello' }
    ]);

    this.router = router;
  }
}
