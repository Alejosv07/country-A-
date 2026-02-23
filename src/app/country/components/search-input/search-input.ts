import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
  styles: ``,
})
export class SearchInput {

  public onSearch = output<string>();

  public searchControl = signal('');

  search(textSerach: string) {
    this.searchControl.set(textSerach.trim());
    if (this.searchControl()) {
      this.onSearch.emit(this.searchControl());
    }
  }

}
