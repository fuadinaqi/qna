import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  handleSubmit(e: any) {
    e.preventDefault()
  }
}
