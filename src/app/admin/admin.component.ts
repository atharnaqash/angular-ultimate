import {Component, OnInit} from '@angular/core';
import {MenuItem} from './data-model/menu-item.model';
import {InzaService} from './service/inza.service';
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
    // this ! tells angular that the value is not initialized but will get a value in ngOnInit rather than constructor()
    menuItem!: MenuItem;

    constructor(private inzaService: InzaService) {
    }

    ngOnInit() {
    }

    onCreate(menuItem: MenuItem) {
        this.inzaService.create(menuItem)
            .subscribe(() => console.log('Created Successfully...'));
    }

    onUpdate(menuItem: MenuItem) {
        this.inzaService.update(menuItem)
            .subscribe({
                next: () => console.log('Updated Successfully...'),
                error: (error) => console.log('onUpdate error:', error)
            });
    }

    onDelete(menuItem: MenuItem) {
        this.inzaService.delete(menuItem).subscribe(() => console.log('Deleted Successfully...'));
    }
}
