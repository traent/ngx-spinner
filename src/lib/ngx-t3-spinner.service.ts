import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { NgxT3SpinnerComponent } from './ngx-t3-spinner.component';

@Injectable({
  providedIn: 'root',
})
export class NgxT3SpinnerService {

  // When you subscribe to this observable, the spinner is displayed
  readonly spinner = new Observable(() => {
    this.show();
    return () => this.hide();
  }).pipe(shareReplay({ refCount: true }));

  private overlayRef?: OverlayRef;

  constructor(private readonly overlay: Overlay) { }

  private show(): void {
    if (!!this.overlayRef) {
      return;
    }

    this.overlayRef = this.overlay.create();

    // TODO: to make it dynamic when will be necessary to handle different types of spinner (not-global, etc.)
    const spinnerOverlayPortal = new ComponentPortal(NgxT3SpinnerComponent);
    this.overlayRef.attach(spinnerOverlayPortal);
  }

  private hide(): void {
    if (!this.overlayRef) {
      return;
    }

    this.overlayRef.detach();
    this.overlayRef = undefined;
  }
}
