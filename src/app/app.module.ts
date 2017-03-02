import 'rxjs/Rx'

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule, Http } from '@angular/http'
import { RouterModule } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { environment } from '../environments/environment' // Firebase Config

import { FireCorxModule } from '../../ngModules/FireCorx'
import { CastlotsCorxModule } from '../../ngModules/CastlotsCorx'

let modules: any[] = [
	BrowserModule, FormsModule, HttpModule, RouterModule,
	NgbModule.forRoot(),
	FireCorxModule,

	// ↓ FireCorxModule &
	CastlotsCorxModule
]

import { AppHeaderComp } from './widgets/app-header'
import { AppFooterComp } from './widgets/app-footer'

let widgets = [
	AppComponent,
	AppHeaderComp, AppFooterComp
]

import { AppComponent } from './app.component'

import { HomePage } from './pages/home/home'

let pages = [
	HomePage
]

import { routing } from './app.routes'

@NgModule({
	bootstrap: [AppComponent],
	declarations: [ ...widgets, ...pages ],
	imports: [ ...modules, routing ]
})
export class AppModule {}