import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Soal, data } from 'src/app/data'
import { AddPoint, AppData, Login } from 'src/app/stores/app.actions'

@Component({
  selector: 'app-qna-detail',
  templateUrl: './qna-detail.component.html',
  styleUrls: ['./qna-detail.component.scss'],
})
export class QnaDetailComponent implements OnInit {
  dataSoal: Soal = {
    id: '',
    deskripsi: '',
    jawaban: '',
    jawabans: [],
  }

  constructor(private store: Store<{ app: AppData }>, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value) => {
      this.dataSoal = data.soal.find((s) => s.id === value['id']) || {
        id: '',
        deskripsi: '',
        jawaban: '',
        jawabans: [],
      }
    })
  }

  get progressValue() {
    return Number(this.dataSoal.id) * 20
  }

  onClickJawaban(jawaban: string | number) {
    const isAddPoint = jawaban == this.dataSoal.jawaban
    if (isAddPoint) {
      this.store.dispatch(new AddPoint(20))
    }
    const currentIndexSoal = data.soal.findIndex((s) => s.id === this.dataSoal.id)
    if (currentIndexSoal < data.soal.length - 1) {
      this.router.navigate(['/qna/', data.soal[currentIndexSoal + 1].id])
    } else {
      this.router.navigate(['/score/'])
    }
  }
}
