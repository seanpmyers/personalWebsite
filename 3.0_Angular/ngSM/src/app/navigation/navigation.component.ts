import { Component, OnInit } from '@angular/core';
import { NAVLINKS } from '../classes/navLinkList';
import { SOCIALLINKS } from '../classes/socialLinksList';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  myName = 'Sean Myers';
  links = NAVLINKS;
  socials = SOCIALLINKS;

  constructor() { }

  ngOnInit() {
  }

}
