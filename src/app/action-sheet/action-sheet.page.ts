import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.handleAction('delete');
          }
        },
        {
          text: 'Share',
          handler: () => {
            this.handleAction('share');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handleAction('cancel');
          }
        }
      ]
    });

    await actionSheet.present();
  }

  handleAction(action: string) {
    // Handle action logic here
    console.log('Action:', action);
  }
}
