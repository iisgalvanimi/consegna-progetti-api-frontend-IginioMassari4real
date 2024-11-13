import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ANIMALS, Emoji, FRUITS } from '../models/emoji.model';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {
  // Initialize genVect as an empty array
  genVect: Emoji[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  ngOnInit(): void {}

  // Improved getRouterParam method with error handling
  getRouterParam = (params: ParamMap) => {
    const uri_param = params.get('id');
    console.log(uri_param);

    // Conditional assignment based on uri_param value
    if (uri_param === 'fruits') {
      this.genVect = FRUITS;
    } else if (uri_param === 'animals') {
      this.genVect = ANIMALS;
    } else {
      console.warn(`Unknown route parameter: ${uri_param}`);
      this.genVect = []; // Clear genVect if id is unrecognized
    }
  };
}
