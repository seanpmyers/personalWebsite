import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../Classes/Page';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() page:Page;

  constructor() { }


  ngOnInit() {
  }

}
