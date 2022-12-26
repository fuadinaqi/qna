// dependency modules
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'

// local modules
import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './modules/material.module'
import { LoginModule } from './pages/login/login.module'

// components
import { AppComponent } from './app.component'
import { MainComponent } from './pages/main/main.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { HeaderComponent } from './components/header/header.component'

// stores
import { appReducer } from './stores/app.reducers'
import { QnaModule } from './pages/qna/qna.module'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

    StoreModule.forRoot({ app: appReducer }, {}),

    LoginModule,
    QnaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
