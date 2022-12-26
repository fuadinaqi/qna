import { NgModule } from '@angular/core'
import { MaterialModule } from 'src/app/modules/material.module'
import { ScoreRoutingModule } from './score-routing.module'
import { ScoreComponent } from './score.component'

@NgModule({
  declarations: [ScoreComponent],
  imports: [ScoreRoutingModule, MaterialModule],
})
export class ScoreModule {}
