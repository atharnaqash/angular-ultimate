import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../data-model/menu-item.model';
import {InzaService} from '../../service/inza.service';

@Component({
  selector: 'app-inza-list',
  templateUrl: './inza-list.component.html',
  styleUrl: './inza-list.component.scss'
})
export class InzaListComponent implements OnInit {

  menuItems!: MenuItem[];

  constructor(private inzaService: InzaService) {}

  ngOnInit() {
    this.menuItems = this.inzaService.read();
  }

  trackById (index: number, value: MenuItem) {
      return value.id
  };
}
