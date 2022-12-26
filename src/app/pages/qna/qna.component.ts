import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppData } from 'src/app/stores/app.actions'
import { data } from 'src/app/data'

@Component({
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.scss'],
})
export class QnaComponent implements OnInit {
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

  onMulai() {
    this.router.navigate(['/qna/', data.soal[0].id])
  }
}
