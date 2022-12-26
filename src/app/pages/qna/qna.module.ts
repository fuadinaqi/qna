import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MaterialModule } from 'src/app/modules/material.module'
import { QnaDetailComponent } from '../qna-detail/qna-detail.component'
import { QnaRoutingModule } from './qna-routing.module'
import { QnaComponent } from './qna.component'

@NgModule({
  declarations: [QnaComponent, QnaDetailComponent],
  imports: [QnaRoutingModule, MaterialModule, ReactiveFormsModule, FormsModule, CommonModule],
})
export class QnaModule {}
