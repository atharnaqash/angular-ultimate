import { Component } from '@angular/core';
import {MenuItem} from './data/menu-item.model';

@Component({
  selector: 'app-inza',
  templateUrl: './inza.component.html',
  styleUrl: './inza.component.scss'
})
export class InzaComponent {

   menuItems: MenuItem[] = [
    {
      id: 'A1B2C3',
      name: 'Roll Parata',
      price: 5,
      isVegetarian: false,
      promo: 'new',
      image: 'rollparata.png'
    },
    {
      id: 'D4E5F6',
      name: "Veggie Delight",
      price: 4.5,
      isVegetarian: true,
      promo: 'limited',
      image: 'veggiedelight.jpeg'
    },
    {
      id: 'G7H8I9',
      name: "Paneer with meat Roll",
      price: 5.5,
      isVegetarian: false,
      promo: 'new',
      image: 'paneerroll.png'
    },
    {
      id: 'J1K2L3',
      name: "Vanilla Ice Cream",
      price: 3,
      isVegetarian: true,
      promo: 'free',
      image: 'vanillaicecream.jpeg'
    },
    {
      id: 'M4N5O6',
      name: "Chocolate Croissant",
      price: 2.5,
      isVegetarian: true,
      promo: 'limited',
      image: 'croisant.png'
    },
    {
      id: 'P7Q8R9',
      name: "Blueberry Muffin",
      price: 2,
      isVegetarian: true,
      promo: 'new',
      image: 'blueberriesmuffins.jpeg'
    },
    {
      id: 'S1T2U3',
      name: "Orange Juice",
      price: 2.5,
      isVegetarian: true,
      image: 'orangejuice.jpeg'
    },
    {
      id: 'V4W5X6',
      name: "Apple Juice",
      price: 2.5,
      isVegetarian: true,
      image: 'applejuice.jpeg'
    },
    {
      id: 'Y7Z8A9',
      name: "Green Tea",
      price: 1.5,
      isVegetarian: true,
      image: 'greentea.jpeg'
    },
    {
      id: 'B1C2D3',
      name: "Espresso",
      price: 2,
      isVegetarian: true,
      image: 'espresso.png'
    }
  ];

  trackById (index: number, value: MenuItem) {
      return value.id
  };
}
