import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule, Http } from '@angular/http'
import { RouterModule } from '@angular/router'
import { AlertModule, DatepickerModule } from 'ng2-bootstrap'
import { environment } from '../environments/environment' // Firebase Config

let modules = [
	AlertModule, DatepickerModule,
	BrowserModule, FormsModule, HttpModule, RouterModule
]

import { AppComponent } from './app.component'

import { HomePage } from './pages/home/home'

let pages = [
	HomePage
]

// main bootstrap
import { routing } from './app.routes'

@NgModule( {
	bootstrap: [AppComponent],
	declarations: [ ...pages ],
	imports: [ ...modules, routing ]
})
export class AppModule { }
