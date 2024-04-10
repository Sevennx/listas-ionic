import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'list', url: '/list', icon: 'duplicate' },
    { title: 'button', url: '/button', icon: 'diamond' },
    { title: 'action-sheet', url: '/action-sheet', icon: 'eye' },
    { title: 'content', url: '/content', icon: 'beer' },
    { title: 'datetime', url: '/datetime', icon: 'car' },
    { title: 'nav', url: '/nav', icon: 'cellular' },
    { title: 'page2', url: '/page2', icon: 'cellular' },
    { title: 'modal', url: '/modal', icon: 'bulb' },
    { title: 'radio', url: '/radio', icon: 'chatbubble' },
    { title: 'searchbar', url: '/searchbar', icon: 'call' },
    { title: 'reorder', url: '/reorder', icon: 'camera' },
    { title: 'select', url: '/select', icon: 'card'},
    { title: 'infinit-scroll', url: '/infinit-scroll', icon: 'filter'},
    { title: 'icon', url: '/icon', icon: 'film'},
    { title: 'input', url: '/input', icon: 'footsteps'},
    { title: 'checkbox', url: '/checkbox', icon: 'ear'},
    { title: 'cards', url: '/cards', icon: 'card'},
    { title: 'ranger', url: '/ranger', icon: 'document'},
    { title: 'toast', url: '/toast', icon: 'exit'},
    { title: 'badges', url: '/badges', icon: 'desktop'},
    { title: 'toggles', url: '/toggles', icon: 'disc'},
    { title: 'toolbar', url: '/toolbar', icon: 'cut'},

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
