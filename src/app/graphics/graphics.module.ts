import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// modules
import {SharedModule} from '../shared/shared.module';
import {GraphicsRoutingModule} from './graphics-routing.module';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// guards
import * as fromGuards from './guards';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GraphicsRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
    ...fromComponents.components,
  ],
  providers: [
    ...fromGuards.guards,
  ],
})
export class GraphicsModule {
}
