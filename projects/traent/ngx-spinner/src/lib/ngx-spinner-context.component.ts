import { Component } from '@angular/core';

@Component({
  selector: 'ngx-t3-spinner-context',
  template: `
    <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-h-full">
    <ng-content select="[before]"></ng-content>
      <mat-spinner color="accent"></mat-spinner>
      <ng-content select="[after]"></ng-content>
    </div>
  `,
  styles: [
    `div {
      background: rgba(255, 255, 255, 0.01);
      backdrop-filter: blur(8px);
    }`,
  ],
})
export class NgxT3SpinnerContextComponent {
}
