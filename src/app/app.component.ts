import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './route-animation';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
  title = 'NewsApp';
  constructor(private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    console.log(this._ActivatedRoute.snapshot);
    
  }
}
