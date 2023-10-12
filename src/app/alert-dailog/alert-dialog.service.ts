import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AlertDialogService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  openAlertDialog(title: string, message: string) {
    // Create a component factory for the AlertDialogComponent
    const factory = this.componentFactoryResolver.resolveComponentFactory(AlertDialogComponent);

    // Create an instance of the component
    const componentRef = factory.create(this.injector);

    // Pass data to the component
    componentRef.instance.title = title;
    componentRef.instance.message = message;

    // Attach the component to the app's view so it becomes part of the DOM
    this.appRef.attachView(componentRef.hostView);

    // Get the root DOM element of the component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    // Create a container for the dialog and add it to the DOM
    const dialogContainer = document.createElement('div');
    dialogContainer.appendChild(domElem);
    document.body.appendChild(dialogContainer);

    // Handle the dialog's close action
    componentRef.instance.close = () => {
      document.body.removeChild(dialogContainer);
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    };
  }
}
