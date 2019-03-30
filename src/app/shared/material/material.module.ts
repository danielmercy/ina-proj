import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatBadgeModule, 
         MatFormFieldModule, MatCardModule, MatStepperModule, MatInputModule,
         MatSlideToggleModule, MatSelectModule, MatRadioModule, MatToolbarModule,
         MatListModule, MatMenuModule, MatRippleModule } from '@angular/material'

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
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatRippleModule
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
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatRippleModule
  ]
})
export class MaterialModule { }