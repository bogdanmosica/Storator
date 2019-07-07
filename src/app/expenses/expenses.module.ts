import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { ExpensesRoutingModule } from './expenses-routing.module';

// guards
import * as fromGuards from './guards';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

@NgModule({
  imports: [
    SharedModule,
    ExpensesRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
    ...fromComponents.components,
  ],
  entryComponents: [
    ...fromContainers.entryComponents,
  ],
  providers: [
    ...fromGuards.guards,
  ],
})
export class ExpensesModule { }
