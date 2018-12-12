import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  key = '5aa543c21de894bf5b74e888f687fcee';
  token = '31cad91d673e6962cfff97cbd615c027db63d237edbc9b83a4284c6618b198ab';
  boardId = 'nC8QJJoZ';
  apiUrl = `https://api.trello.com/1/boards/${this.boardId}/cards/?key=${this.key}&token=${this.token}`;

  cards: any[] = [];
  constructor(private client: HttpClient) {
    console.log("Hi there human");
  }


  listTheCards() {
    this.cards = [];
    this.client.get(this.apiUrl)
      .toPromise()
      .then((result: any[]) => {
        console.log("Success ", result);
        this.cards = result;
      })
      .catch(err => {
        console.log("Error ", err);
      });
  }
}
