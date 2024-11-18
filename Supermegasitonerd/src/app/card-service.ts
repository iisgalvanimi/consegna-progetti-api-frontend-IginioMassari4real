import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from './card-model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'https://api.scryfall.com/cards/named';

  constructor(private http: HttpClient) {}

  getCardByName(cardName: string): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}?exact=${cardName}`);
  }
}