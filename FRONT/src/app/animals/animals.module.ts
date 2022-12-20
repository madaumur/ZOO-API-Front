import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AnimalsRoutingModule } from './animals-routing.module'
import { AnimalsListComponent } from './components/animals-list/animals-list.component'
import { AnimalsListItemComponent } from './components/animals-list-item/animals-list-item.component'
import { AnimalsService } from './services/animals.service'
import { AnimalsResolver } from './resolvers/animals.resolver'
import { SharedModule } from '../shared/shared.module'

@NgModule({
	declarations: [AnimalsListComponent, AnimalsListItemComponent],
	imports: [CommonModule, AnimalsRoutingModule, SharedModule],
	providers: [AnimalsService, AnimalsResolver],
})
export class AnimalsModule {}