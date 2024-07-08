import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-inza-form',
  templateUrl: './inza-form.component.html',
  styleUrl: './inza-form.component.scss'
})
export class InzaFormComponent {

  icons: string[] = [
    'food-cheezy.jpg',
    'mangoo-juice.jpg',
    'dhuram.jpg'
  ]


  handleSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value)
      alert(JSON.stringify(form.value))
    }
  }
}
