import { Component, computed, inject } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country-service';
import { MapperCountry } from '../../interfaces/mapper-country';

@Component({
  selector: 'app-by-region',
  imports: [SearchInput, CountryList],
  templateUrl: './by-region.html',
  styles: ``,
})
export class ByRegion {
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
