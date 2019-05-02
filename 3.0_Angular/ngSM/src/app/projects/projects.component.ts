import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../classes/project_list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = PROJECTS;



  constructor() { }

  ngOnInit() {
  }

}
