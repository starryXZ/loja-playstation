import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  imports: [],
  templateUrl: './card-pricing.html',
  styleUrl: './card-pricing.css'
})
export class CardPricing {
  @Input()
  gameType:string = "Digital PS4";
  @Input()
  gamePrice:string = "123,42";
}
