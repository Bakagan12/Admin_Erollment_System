import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PesosPipe } from '../shared/pesos.pipe';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // For animations

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    // BrowserAnimationsModule,
  ],
  declarations: [PesosPipe],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    PesosPipe
    // BrowserAnimationsModule,
  ],
})
export class SharedDeclarationsModule { }
