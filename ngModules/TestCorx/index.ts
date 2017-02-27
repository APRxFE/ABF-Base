import 'rxjs/Rx'

import { NgModule } from '@angular/core'

import { TestCorx } from './testCorx'

@NgModule({
	providers: [
		TestCorx
	]	
})
export class TestCorxModule {}

export { TestCorx }