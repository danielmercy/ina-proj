import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographComponent } from './components/typograph/typograph.component';
import { CardComponent } from './components/card/card.component';
import { GraphComponent } from './components/graph/graph.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [TypographComponent, CardComponent, GraphComponent, ButtonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
