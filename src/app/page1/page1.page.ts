import { Component, OnInit } from '@angular/core';
import { Page2Page } from '../page2/page2.page';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  nav = Page2Page;

}
