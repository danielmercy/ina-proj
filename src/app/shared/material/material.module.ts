import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatBadgeModule, 
         MatFormFieldModule, MatCardModule, MatStepperModule, MatInputModule,
         MatSlideToggleModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatBadgeModule, 
    MatFormFieldModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatBadgeModule, 
    MatFormFieldModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }