import { Component } from '@angular/core';
import { filters, singleFilter } from './filterData';
import { kurtaPage1 } from 'src/data/Kurta/kurta';
import { mensPantsPage1 } from 'src/data/pants/men_page1';
import { mens_kurta } from 'src/data/Men/men_kurta';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  filterData: any;
singleFilterData: any;
kurta: any;
mensPants: any;

  ngOnInit()
  {
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.kurta =  mens_kurta;
    this.mensPants=  mensPantsPage1;
  }
}
