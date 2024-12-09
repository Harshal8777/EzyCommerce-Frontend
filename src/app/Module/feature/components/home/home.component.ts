import { Component } from '@angular/core';
import { menJeans } from 'src/data/Men/men_jeans';
import { gounsPage1 } from 'src/data/Gouns/gouns';
import { lengha_page1 } from 'src/data/Women/LenghaCholi';
import { mens_kurta } from 'src/data/Men/men_kurta';
import { mensShoesPage1 } from 'src/data/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
menJeans: any;
womenGouns: any;
lenghacholi: any;
mensKurta: any;
mensShoes: any;

ngOnInit()
{
  this.menJeans=menJeans.slice(0,5);
  this.womenGouns=  gounsPage1.slice(0, 5)
  this.lenghacholi = lengha_page1.slice(0, 5);
  this.mensKurta = mens_kurta.slice(0, 5);
  this.mensShoes =  mensShoesPage1.slice(0,5)
}

}
