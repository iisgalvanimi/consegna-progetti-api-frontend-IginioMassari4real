import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private items = [
    {
      id: 1,
      name: 'Oggetto 1',
      image: 'https://via.placeholder.com/150',
      description: 'Questo è il primo oggetto, molto interessante.',
      price: 10.99,
      category: 'Elettronica',
    },
    {
      id: 2,
      name: 'Oggetto 2',
      image: 'https://via.placeholder.com/150',
      description: 'Secondo oggetto con molte caratteristiche utili.',
      price: 25.5,
      category: 'Casa e Giardino',
    },
    {
      id: 3,
      name: 'Oggetto 3',
      image: 'https://via.placeholder.com/150',
      description: 'Oggetto elegante per uso quotidiano.',
      price: 15.75,
      category: 'Accessori',
    },
  ];

  searchItems(query: string): Observable<any[]> {
    const results = this.items.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    return of(results);
  }

  getItemById(id: number): Observable<any> {
    const item = this.items.find(item => item.id === id);
    return of(item || null);
  }
}
