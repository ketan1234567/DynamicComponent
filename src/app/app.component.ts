// app.component.ts
import { Component } from '@angular/core';

import { AlertDialogService } from './alert-dailog/alert-dialog.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="openAlertDialog()">Open Alert Dialog</button>
  `
})
export class AppComponent {
  constructor(private dynamicComponentService:AlertDialogService) {}

  openAlertDialog() {
    this.dynamicComponentService.openAlertDialog('Alert', 'This is a dynamic alert dialog.');
  
  }
}