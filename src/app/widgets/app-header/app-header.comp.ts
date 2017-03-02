import { Component, Input } from '@angular/core'

import { FireCorx } from '../../../../ngModules/FireCorx'

@Component( {
    selector: 'app-header',
    styleUrls: ['./app-header.comp.scss'],
    templateUrl: './app-header.comp.html'
})
export class AppHeaderComp {
    constructor(
    	public fireCorx: FireCorx
    ) {}
}
