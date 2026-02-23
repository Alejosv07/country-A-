import { Component, input } from '@angular/core';
import { countryDTO } from '../../dto/country-dto';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.html',
  styles: ``,
})
export class CountryList {
  public inputCountryList = input.required<countryDTO[]>();
}
