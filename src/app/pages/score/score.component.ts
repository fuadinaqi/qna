import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppData, Reset } from 'src/app/stores/app.actions'

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  app$: Observable<AppData>

  public data: AppData = {
    name: '',
    points: 0,
  }

  constructor(private store: Store<{ app: AppData }>, private router: Router) {
    this.app$ = store.select('app')
  }

  ngOnInit(): void {
    this.app$.subscribe((value: AppData) => {
      this.data = value
    })
  }

  onReset() {
    this.store.dispatch(new Reset())
    this.router.navigate(['/'])
  }
}
