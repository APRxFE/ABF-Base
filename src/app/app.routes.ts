import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Pages

import { MainPage } from './pages/main/main'

const routes: Routes = [
	{ path: '', component: MainPage }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
