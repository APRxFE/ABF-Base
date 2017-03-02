import { Component, OnInit, OnDestroy } from '@angular/core'

import { FireCorx } from '../../../../ngModules/FireCorx'
import { CastlotsCorx } from '../../../../ngModules/CastlotsCorx'

//declare var jQuery


@Component({
	selector: 'app-main-page',
	styleUrls: ['./main.scss'],
	templateUrl: './main.html'
})
export class MainPage implements OnInit, OnDestroy {

	constructor(
		public fireCorx: FireCorx,
		public castlotsCorx: CastlotsCorx 		
	) {}

	public ngOnInit() {
	}

	public ngOnDestroy() {
	}

}