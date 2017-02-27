import 'rxjs/Rx'

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule, Http } from '@angular/http'
import { RouterModule } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { environment } from '../environments/environment' // Firebase Config

import { FireCorxModule } from '../../ngModules/FireCorx'

let modules: any[] = [
	BrowserModule, FormsModule, HttpModule, RouterModule,
	NgbModule.forRoot(),
	FireCorxModule,

	// ↓ FireCorxModule +
	//TestCorxModule
]

import { AppComponent } from './app.component'

import { HomePage } from './pages/home/home'

let pages = [
	HomePage
]

import { routing } from './app.routes'

@NgModule({
	bootstrap: [AppComponent],
	declarations: [ AppComponent, ...pages ],
	imports: [ ...modules, routing ]
})
export class AppModule {}
