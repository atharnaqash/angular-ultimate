import {Component, OnInit} from '@angular/core';
import {MenuItem} from './data-model/menu-item.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  // this ! tells angular that the value is not initialized but will get a value in ngOnInit rather than constructor()
  menuItem!: MenuItem;

  ngOnInit() {
    this.menuItem =  {
      id: "ABS12X",
      name: "Margherita Pizza",
      price: 8.99,
      isVegetarian: true,
      promo: 'limited',
      image: "margherita_pizza.jpg"
    }
  }

  onCreate(menuItem: MenuItem) {
    console.log('app-admin, onCreate()', menuItem)
  }
}
