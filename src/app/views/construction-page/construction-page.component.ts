import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing-service';

@Component({
  selector: 'app-construction-page',
  templateUrl: './construction-page.component.html',
  styleUrls: ['./construction-page.component.less']
})
export class ConstructionPageComponent implements OnInit {

  ngOnInit(): void {
    this.quote = this.getQuote();
  }

  quote: string = '';
  // TODO
  //  GO into game and fill in quotes
  quotes = [
    'I\'d offer you a bacon butty but I ate my last one!',
    'I haven\'t woke anyone up at the crack of dawn for ages!',
  ];

  private getQuote(): string {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}
