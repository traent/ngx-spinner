import { Component } from '@angular/core';

@Component({
  selector: 'ngx-t3-spinner',
  template: `
    <div class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-w-full tw-h-full">
      <mat-spinner color="accent"></mat-spinner>
    </div>
  `,
  styles: [
    `div {
      position: fixed;
      top: 0;
      left: 0;

      z-index: var(--z-index-spinner);

      background: rgba(255, 255, 255, 0.01);
      backdrop-filter: blur(8px);
    }`,
  ],
})
export class NgxT3SpinnerComponent {
}
