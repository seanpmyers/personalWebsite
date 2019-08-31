import { Component, OnInit } from '@angular/core';
import { Page } from '../Classes/Page';
import { Link } from '../Classes/Link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentPageIndex: number = 0;
  activePage: Page;
  onSelect(page: Link): void {
    for(var i = 0; i<this.pages.length; i++) {
      if(this.pages[i].title == page.text) {
        this.currentPageIndex = this.pages[i].index;
        this.activePage = this.pages[i];
      }
    }
  }
  
  pages: Page[] = [
    {title: 'Home', index: 0},
    {title: 'Projects', index: 1},
    {title: 'TuoMang', index: 2},
    {title: 'Runs', index: 3}
  ]

  constructor() { }

  ngOnInit() {
    this.activePage = this.pages[this.currentPageIndex];
  }

}
