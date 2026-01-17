import { Routes } from '@angular/router';
import { LayoutPage } from './countryLayout/layout-page/layout-page';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';

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
        path:"**",
        redirectTo:"by-capital"
      }
    ]
  },
];

export default CountryRoutes;
