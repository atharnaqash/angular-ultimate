import {Component, OnInit} from '@angular/core';
import {MenuItem} from './data-model/menu-item.model';
import {InzaService} from './service/inza.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  // this ! tells angular that the value is not initialized but will get a value in ngOnInit rather than constructor()
  menuItem!: MenuItem;

  constructor(private inzaService:InzaService) {}

  ngOnInit() {
    //get item with id or else create a default object
    const id = 'ABS12X';
    this.menuItem = this.inzaService.readOneItem(id);
  }

  onCreate(menuItem: MenuItem) {
    console.log('app-admin, onCreate()', menuItem)
  }
}
