import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchItems(query: string): Observable<any[]> {
    const mockData = [
      { id: 1, name: 'Oggetto 1', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Oggetto 2', image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Oggetto 3', image: 'https://via.placeholder.com/150' },
    ];
    return of(mockData.filter(item => item.name.toLowerCase().includes(query.toLowerCase())));
  }
}
