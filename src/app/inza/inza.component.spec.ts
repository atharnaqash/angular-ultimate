import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InzaComponent } from './inza.component';

describe('InzaComponent', () => {
  let component: InzaComponent;
  let fixture: ComponentFixture<InzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
