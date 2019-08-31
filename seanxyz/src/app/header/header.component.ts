import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../Classes/Page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() page:Page;

  constructor() { }

  ngOnInit() {
  }

}
