import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trello-card',
  templateUrl: './trello-card.component.html',
  styleUrls: ['./trello-card.component.css']
})
export class TrelloCardComponent implements OnInit {
  @Input() cardName: string = "";
  constructor() { }

  ngOnInit() {
  }

}
