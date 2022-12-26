import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { QnaDetailComponent } from '../qna-detail/qna-detail.component'
import { QnaComponent } from './qna.component'

const routes: Routes = [
  {
    path: '',
    component: QnaComponent,
  },
  {
    path: ':id',
    component: QnaDetailComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QnaRoutingModule {}
