import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinit-scroll',
  templateUrl: './infinit-scroll.page.html',
  styleUrls: ['./infinit-scroll.page.scss'],
})
export class InfinitScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  items: string[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(event: any) {
    this.generateItems();
    setTimeout(() => {
      this.infiniteScroll.complete();
    }, 500);
  }
}
