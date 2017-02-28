import * as Rx from 'rxjs'

import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { FireCorx } from '../../ngModules/FireCorx'
import { CastlotsCorx } from '../../ngModules/CastlotsCorx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

	constructor(
		public fireCorx: FireCorx,
		public castlotsCorx: CastlotsCorx
	) {
		//this.fireCorx.appStartRx.subscribe(d=>console.log(d))
	}
}