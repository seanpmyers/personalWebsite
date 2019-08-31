import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Link } from '../Classes/Link';
import { Page } from '../Classes/Page';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() page: Page;
  @Output() changedPage = new EventEmitter<Link>();

  changePage(page: Link) {
    this.changedPage.emit(page);
  }


  links: Link[] = [
    {text: 'Home', route: '/', url: ''},
    {text: 'Projects', route: '/Projects', url: ''},
    {text: 'TuoMang', route: '/TuoMang', url: ''},
    {text: 'Runs', route: '/Runs', url: ''}
  ]



  constructor() { }

  ngOnInit() {
  }

}
