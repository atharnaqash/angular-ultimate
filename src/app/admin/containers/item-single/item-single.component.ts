import {Component, Input} from '@angular/core';
import {MenuItem} from '../../data-model/menu-item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-single.component.html',
  styleUrl: './item-single.component.scss'
})
export class ItemSingleComponent {
@Input() item: any;
@Input() index: number = 0;
}
