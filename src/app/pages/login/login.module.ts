import { NgModule } from '@angular/core'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component'
import { MaterialModule } from 'src/app/modules/material.module'
import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login.component'

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LoginModule {}
