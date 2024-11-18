import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card-service';
import { Card } from '../card-model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  card!: Card;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    const cardId = this.route.snapshot.data['cardId'];
    this.cardService.getCardByName(cardId).subscribe(data => {
      this.card = data;
    });
  }
}