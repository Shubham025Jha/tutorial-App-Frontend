import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  navigateToList(){
    this._router.navigate([`tutorials`]);
  }

  navigateToAdd(){
    this._router.navigate([`add`]);
  }

}
