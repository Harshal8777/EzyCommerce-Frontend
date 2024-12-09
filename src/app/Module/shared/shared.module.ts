import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MainCarouselComponent } from '../feature/components/home/main-carousel/main-carousel.component';
import { RouterLink } from '@angular/router';
import { SharedComponent } from './components/shared.component';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavContentComponent,
   
    SharedComponent,
        ProductCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavContentComponent,
    SharedComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
