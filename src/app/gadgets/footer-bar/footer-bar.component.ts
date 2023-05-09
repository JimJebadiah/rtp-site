import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rtp-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.less']
})
export class FooterBarComponent implements OnInit {
  year: number | undefined;

  ngOnInit(): void {
      const date = new Date();
      this.year = date.getFullYear();
  }
}
