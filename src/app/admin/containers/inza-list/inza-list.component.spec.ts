import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InzaListComponent } from './inza-list.component';

describe('InzaComponent', () => {
  let component: InzaListComponent;
  let fixture: ComponentFixture<InzaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InzaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InzaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
