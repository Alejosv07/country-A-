import { Injectable } from '@angular/core';
import { MapperInterface } from '../../shared/interfaces/mapper-interface';
import { countryDTO } from '../dto/country-dto';
import { RestCountryApiResult } from './country-rest-api-interfaces';

@Injectable({
  providedIn: 'root',
})

export class MapperCountry implements MapperInterface<RestCountryApiResult, countryDTO> {

  mapToEntity(inputDTO: countryDTO): RestCountryApiResult {
    throw new Error('Method not implemented.');
  }

  mapToEntityArray(inputDTO: countryDTO[]): RestCountryApiResult[] {
    throw new Error('Method not implemented.');
  }

  mapToDTO(inputEntity: RestCountryApiResult): countryDTO {
    return {
      id: 0,
      icon: "",
      flag: "",
      name: inputEntity.name.official,
      capital: inputEntity.capital[0],
      population: inputEntity.population
    };
  }

  mapToDTOArray(inputEntity: RestCountryApiResult[]): countryDTO[] {
    if(inputEntity.length == 0) return [];
    return inputEntity.map((element, index) => {
      return {
        id: index + 1,
        icon: element.flag,
        flag: element.flags.png,
        name: element.name.official,
        capital: element.capital[0],
        population: element.population
      }
    })
  }

}
