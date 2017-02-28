import { Component, OnInit, OnDestroy } from '@angular/core'

import { FireCorx } from '../../../../ngModules/FireCorx'

//declare var jQuery


@Component({
	selector: 'app-home-page',
	styleUrls: ['./home.scss'],
	templateUrl: './home.html'
})
export class HomePage implements OnInit, OnDestroy {

	constructor(
		public fireCorx: FireCorx
	) {
		
	}

	public ngOnInit() {
	}

	public ngOnDestroy(){
	}

}