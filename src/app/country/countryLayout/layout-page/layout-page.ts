import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryNavBar } from "../../components/country-nav-bar/country-nav-bar";

@Component({
  selector: 'app-layout-page',
  imports: [RouterOutlet, CountryNavBar],
  templateUrl: './layout-page.html',
  styles: ``,
})
export class LayoutPage {

}
