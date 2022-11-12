import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './componentes/heading/heading.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { landingPageComponent } from './views/landing-page.component';



@NgModule({
  declarations: [
    HeadingComponent,
    FooterComponent,
    landingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    landingPageComponent  
  ]
})
export class LandingPageModule { }
