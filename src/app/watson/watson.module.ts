import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatsonRoutingModule } from './watson.routing.module';

@NgModule({
  imports: [
    CommonModule,
    WatsonRoutingModule
  ],
  declarations: [],
  exports: [
    WatsonRoutingModule
  ]
})
export class WatsonModule { }
