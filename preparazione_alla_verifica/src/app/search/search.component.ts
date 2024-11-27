import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery = '';
  results: any[] = [];

  constructor(private apiService: ApiService) {}

  performSearch(): void {
    this.apiService.searchItems(this.searchQuery).subscribe(data => {
      this.results = data;
      console.log(data); // Log su console
    });
  }
}
