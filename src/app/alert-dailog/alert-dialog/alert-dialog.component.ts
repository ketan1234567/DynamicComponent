import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  template: `
    <div class="alert-dialog">
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <button (click)="close()">Close</button>
    </div>
  `,
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent {
  @Input() title: string;
  @Input() message: string;

  close() {
    // You can implement any logic here to close the dialog, e.g., emitting an event.
  }
}