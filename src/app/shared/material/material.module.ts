import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatBadgeModule, 
         MatFormFieldModule, MatCardModule, MatStepperModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatBadgeModule, 
    MatFormFieldModule,
    MatCardModule,
    MatStepperModule
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatBadgeModule, 
    MatFormFieldModule,
    MatCardModule,
    MatStepperModule
  ]
})
export class MaterialModule { }