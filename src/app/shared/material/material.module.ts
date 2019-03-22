import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatBadgeModule, 
         MatFormFieldModule, MatCardModule, MatStepperModule, MatInputModule,
         MatSlideToggleModule, MatSelectModule, MatRadioModule } from '@angular/material'

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
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule
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
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule
  ]
})
export class MaterialModule { }