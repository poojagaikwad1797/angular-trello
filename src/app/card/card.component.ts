import { Component, OnInit, Input} from '@angular/core';
import { CardDataService } from 'src/services/card-data.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id: number;
  myCard: any;

  cardList: any[] = [
    {
      id: 1,
      title: 'Drink water!',
      description: 'Drink 8 glasses of water! Stay hydrated, king!'
    },
    {
      id: 2,
      title: 'Read a book',
      description: 'It can be any book, a technical book, or just for enjoyment.'
    },
    {
      id: 3,
      title: 'Finish Gym Module',
      description: 'Make sure it includes proper routing.'
    }
  ];

  constructor(private cardDataService: CardDataService) { }

  ngOnInit() {
    // this.myCard = this.cardList.find(card => card.id === this.id);
    this.myCard = this.cardDataService.getCard();
  }
}

