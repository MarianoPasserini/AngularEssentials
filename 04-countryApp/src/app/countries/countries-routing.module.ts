import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';

const routes: Routes = [
  {
    path:'byCapital',
    component: ByCapitalPageComponent
  },
  {
    path:'byCountry',
    component: ByCountryPageComponent
  },
  {
    path:'byRegion',
    component: ByRegionPageComponent
  },
  {
    path: 'by/:id',
    component: ByCountryPageComponent
  },
  {
    path: '**',
    redirectTo: 'byCapital'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }
