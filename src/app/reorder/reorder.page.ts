import { Component } from '@angular/core';

import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-reorder',
  templateUrl: 'reorder.page.html', // Corrigido o nome do arquivo do template
})
export class ReorderPage { // Corrigido o nome do componente para corresponder ao arquivo
  public isDisabled = true;

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // O método handleReorder permanece o mesmo
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }

  toggleReorder() {
    this.isDisabled = !this.isDisabled;
  }
}
