export interface MapperInterface<E,D> {
  mapToEntity(inputDTO: D): E;
  mapToEntityArray(inputDTO: D[]): E[];
  mapToDTO(inputEntity: E): D;
  mapToDTOArray(inputEntity: E[]): D[];
}
