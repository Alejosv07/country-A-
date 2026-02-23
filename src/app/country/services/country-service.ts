import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { apiState } from '../../shared/interfaces/api-state';
import { RestCountryApiResult } from '../interfaces/country-rest-api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  private _dataApi = signal<apiState<RestCountryApiResult[]>>({
    data: null,
    isLoading: false,
    error: ""
  });

  public countryList = this._dataApi.asReadonly();

  public searchByCapital = (capital: string) => {
    this.search(environment.BASEURL + environment.BYCAPITALURL + capital);
  }

  public searchByCountry = (country: string) => {
    this.search(environment.BASEURL + environment.BYCOUNTRYURL + country);
  }

  public searchByRegion = (region: string) => {
    this.search(environment.BASEURL + environment.BYREGIONURL + region);
  }

  private search = (url: string) => {
    this._dataApi.update(state => ({ ...state, isLoading: true }));
    this.http.get<RestCountryApiResult[]>(url).subscribe({
      next: (data) => {
        this._dataApi.set({
          data: data,
          isLoading: false,
          error: ""
        });
      },
      error: (err) => {
        this._dataApi.set({
          data: null,
          isLoading: false,
          error: err
        });
      },
    });
  }

}
