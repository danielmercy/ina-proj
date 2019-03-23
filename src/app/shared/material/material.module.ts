import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatBadgeModule, 
         MatFormFieldModule, MatCardModule, MatStepperModule, MatInputModule,
         MatSlideToggleModule, MatSelectModule, MatRadioModule, MatToolbarModule } from '@angular/material'

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
    MatRadioModule,
    MatToolbarModule
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
    MatRadioModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }