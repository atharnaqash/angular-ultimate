import {Component, Input} from '@angular/core';
import {MenuItem} from '../../data/menu-item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
@Input() item: any;
@Input() index: number = 0;
}
