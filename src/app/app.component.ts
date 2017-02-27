import * as Rx from 'rxjs'

import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { FireCorx } from '../../ngModules/FireCorx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

	valueSt: any = new Rx.Subject()

	_value: string = ''
	get value(){ return this._value }
	set value(val){ this.valueSt.next(val) }
	value$ = this.valueSt.subscribe(d => {
		console.log(d)
		this._value = d
	})

	constructor(
		public fireCorx: FireCorx
	){

		this.value = 'core'
		this.value = 'core2'

	}	
}