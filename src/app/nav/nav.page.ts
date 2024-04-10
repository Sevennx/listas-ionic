import { Component, OnInit } from '@angular/core';
import { Page1Page } from '../page1/page1.page';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {

  constructor() { }
    
  ngOnInit() {
  }
  nav = Page1Page;
}
