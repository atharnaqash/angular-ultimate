import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MenuItem} from '../../data-model/menu-item.model';

@Component({
  selector: 'app-inza-form',
  templateUrl: './inza-form.component.html',
  styleUrl: './inza-form.component.scss'
})
export class InzaFormComponent {
  @Input() menuItem!: MenuItem;
  @Output() create = new EventEmitter<MenuItem>();
  @Output() update = new EventEmitter<MenuItem>();
  @Output() delete = new EventEmitter<MenuItem>();

  images: string[] = [
    'food-cheezy.jpg',
    'mangoo-juice.jpg',
    'dhuram.jpg',
    'margherita_pizza.jpg',
      'dalchana.png'
  ]


  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    }
  }

  handleUpdate(form: NgForm) {
    if (form.valid) {
      this.update.emit({id: this.menuItem.id, ...form.value});
    }
  }

  deleteUpdate(form: NgForm) {
    if (form.valid) {
      this.delete.emit({id: this.menuItem.id, ...form.value});
    }
  }
}
