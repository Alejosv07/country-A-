import { Routes } from '@angular/router';
import { LayoutPage } from './countryLayout/layout-page/layout-page';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { ByCountryPage } from './pages/by-country-page/by-country-page';
import { ByRegion } from './pages/by-region/by-region';

export const CountryRoutes: Routes = [
  {
    path: "country",
    component: LayoutPage,
    children:[
      {
        path:"by-capital",
        component: ByCapitalPage
      },
      {
        path:"by-country",
        component: ByCountryPage
      },
      {
        path:"by-region",
        component: ByRegion
      },
      {
        path:"**",
        redirectTo:"by-capital"
      }
    ]
  },
];

export default CountryRoutes;
