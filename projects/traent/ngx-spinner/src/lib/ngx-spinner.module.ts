import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgxT3SpinnerContextComponent } from './ngx-spinner-context.component';
import { NgxT3SpinnerComponent } from './ngx-spinner.component';

@NgModule({
  declarations: [
    NgxT3SpinnerComponent,
    NgxT3SpinnerContextComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    OverlayModule,
  ],
  exports: [
    NgxT3SpinnerComponent,
    NgxT3SpinnerContextComponent,
  ],
})
export class NgxT3SpinnerModule { }
