import { BootMixin } from '@loopback/boot';
import { ApplicationConfig } from '@loopback/core';
import { RestExplorerBindings, RestExplorerComponent } from '@loopback/rest-explorer';
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
import { ServiceMixin } from '@loopback/service-proxy';
import { MySequence } from './sequence';
import path from 'path';

export {ApplicationConfig};

export class ApiApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
     constructor(options: ApplicationConfig = {}) {
          super(options);

          this.sequence(MySequence);

          this.static('/', path.join(__dirname, '../public'));

          this.configure(RestExplorerBindings.COMPONENT).to({
               path: '/explorer',
          });
          this.component(RestExplorerComponent);

          this.projectRoot = __dirname;
          this.bootOptions = {
          controllers: {
               dirs: ['controllers'],
               extensions: ['.controller.js'],
               nested: true,
          },
     };
}};