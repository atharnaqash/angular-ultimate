import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InzaFormComponent } from './inza-form.component';

describe('InzaFormComponent', () => {
  let component: InzaFormComponent;
  let fixture: ComponentFixture<InzaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InzaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InzaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
