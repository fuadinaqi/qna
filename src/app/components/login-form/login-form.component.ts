import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<string>()

  formGroup: FormGroup = this.fb.group({
    name: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  handleSubmit(e: any) {
    e.preventDefault()
    this.onSubmit.emit(this.formGroup.value.name as string)
  }
}
