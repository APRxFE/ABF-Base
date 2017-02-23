import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Pages

import { HomePage } from './pages/home/home'

const routes: Routes = [
	{ path: '', component: HomePage }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
