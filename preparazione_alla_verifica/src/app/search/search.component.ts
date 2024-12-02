import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchResults: any[] = [];
  searchTerm: string = ''; 
  constructor(private foodService: ApiService) {}

  search() {
    if (this.searchTerm.trim()) {
      this.foodService.searchProducts(this.searchTerm).subscribe((data) => {
        this.searchResults = data.products || [];
      });
    }
  }
}