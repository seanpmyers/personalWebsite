import { Component, OnInit } from '@angular/core';
import { Link } from '../Classes/Link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socials: Link[] = [
    {text: 'Github', route: '', url: 'https://github.com/seanpmyers'},
    {text: 'Linkedin', route: '', url: 'https://www.linkedin.com/in/spmyers/'},
    {text: 'Twitter', route: '', url: 'https://twitter.com/spmyers22'},
    {text: 'Resume', route: '', url: 'https://docs.google.com/document/d/1GvKfnmHnWzW7AckQHn0XvsXMfQyNxsPtllkFYW8SQNc/edit?usp=sharing'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
