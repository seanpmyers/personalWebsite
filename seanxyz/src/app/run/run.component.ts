import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.http.get("https://localhost:5001/api/runs/5d34b5d8554efe2c47f22264"));
  }

}
