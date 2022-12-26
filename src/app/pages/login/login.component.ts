import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppData, Login } from 'src/app/stores/app.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  app$: Observable<AppData>

  constructor(private store: Store<{ app: AppData }>, private router: Router) {
    this.app$ = store.select('app')
  }

  ngOnInit(): void {
    this.app$.subscribe((value) => {
      if (value.name) {
        this.router.navigate(['/qna/'])
      }
    })
  }

  onSubmit(name: string) {
    this.store.dispatch(
      new Login({
        name,
        points: 0,
      })
    )
  }
}
