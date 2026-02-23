import { Component, computed, inject } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryService } from '../../services/country-service';
import { MapperCountry } from '../../interfaces/mapper-country';
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
  styles: ``,
})
export class ByCountryPage {

  public countryServices = inject(CountryService);
  public mapper = inject(MapperCountry);
  public dtoList = computed(() => {
    const state = this.countryServices.countryList();

    if (state.isLoading || !state.data) {
      return [];
    }


    return this.mapper.mapToDTOArray(state.data);
  });
}
