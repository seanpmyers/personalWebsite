import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Run } from './Classes/run';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seanxyz';

  constructor(private apiService: ApiService) {}

  ngOnInit(){
    
  }
}
