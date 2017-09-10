import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversationComponent } from './conversation/conversation.component';

const appRoutes: Routes = [
    { path: 'chat', component: ConversationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ConversationComponent
  ]
})
export class WatsonRoutingModule { }
