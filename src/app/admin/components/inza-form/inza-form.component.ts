import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MenuItem} from '../../data-model/menu-item.model';
import {InzaService} from "../../service/inza.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-inza-form',
    templateUrl: './inza-form.component.html',
    styleUrl: './inza-form.component.scss'
})
export class InzaFormComponent implements OnInit {
    @Input() menuItem!: MenuItem;
    @Output() create = new EventEmitter<MenuItem>();
    @Output() update = new EventEmitter<MenuItem>();
    @Output() delete = new EventEmitter<MenuItem>();

    isEdit!: boolean;

    images: string[] = [
        'food-cheezy.jpg',
        'mangoo-juice.jpg',
        'dhuram.jpg',
        'margherita_pizza.jpg',
        'dalchana.png'
    ]

    constructor(private inzaService: InzaService,
                private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        console.log(id)
        //get item with id or else create a default object
        this.inzaService.readOneItem(id)
            .subscribe((menuItem: MenuItem) => this.menuItem = menuItem);
        this.isEdit = this.route.snapshot.data['isEdit'];
    }

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

    deleteUpdate(form
                     :
                     NgForm
    ) {
        if (form.valid) {
            this.delete.emit({id: this.menuItem.id, ...form.value});
        }
    }
}
