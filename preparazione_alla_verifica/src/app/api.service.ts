import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://world.openfoodfacts.org';

  constructor(private http: HttpClient) {}

  searchProducts(term: string, pageSize: number = 10): Observable<any> {
    return this.http.get(`${this.baseUrl}/cgi/search.pl`, {
      params: {
        search_terms: term,
        page_size: pageSize.toString(),
        json: 'true',
      },
    });
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/v0/product/${id}.json`);
  }
}