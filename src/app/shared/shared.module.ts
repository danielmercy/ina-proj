import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "./material/material.module";
import { TypographComponent } from './components/typograph/typograph.component';
import { CardComponent } from './components/card/card.component';
import { GraphComponent } from './components/graph/graph.component';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [TypographComponent, CardComponent, GraphComponent, ButtonComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxEchartsModule
  ],
  exports: [
    TypographComponent,
    CardComponent,
    GraphComponent,
    ButtonComponent,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxEchartsModule
  ]
})
export class SharedModule { }
