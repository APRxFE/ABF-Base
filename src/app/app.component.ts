import * as Rx from 'rxjs'

import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { TestCorx } from '../../ngModules/TestCorx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

	constructor(
		public testCorx: TestCorx
	){}	
}