import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MenuItem} from '../../../inza/data/menu-item.model';

@Component({
  selector: 'app-inza-form',
  templateUrl: './inza-form.component.html',
  styleUrl: './inza-form.component.scss'
})
export class InzaFormComponent {
  @Input() menuItem!: MenuItem;
  @Output() create = new EventEmitter<MenuItem>();

  images: string[] = [
    'food-cheezy.jpg',
    'mangoo-juice.jpg',
    'dhuram.jpg',
    'margherita_pizza.jpg'
  ]

  handleSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value)
      //alert(JSON.stringify(form.value))
      this.create.emit(form.value);
    }
  }
}
