import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSingleComponent } from './item-single.component';

describe('ItemCardComponent', () => {
  let component: ItemSingleComponent;
  let fixture: ComponentFixture<ItemSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
