import { Injectable, NgZone } from '@angular/core'

import { FireCorx } from '../FireCorx'

@Injectable()
export class TestCorx {

	constructor(
		public fireCorx: FireCorx,
		private _zone: NgZone
	){}

}