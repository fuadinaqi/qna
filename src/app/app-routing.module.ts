import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from './pages/main/main.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'qna',
        loadChildren: () => import('./pages/qna/qna.module').then((m) => m.QnaModule),
      },
      {
        path: 'score',
        loadChildren: () => import('./pages/score/score.module').then((m) => m.ScoreModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
