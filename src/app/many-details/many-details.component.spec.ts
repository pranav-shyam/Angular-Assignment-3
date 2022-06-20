import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyDetailsComponent } from './many-details.component';

describe('ManyDetailsComponent', () => {
  let component: ManyDetailsComponent;
  let fixture: ComponentFixture<ManyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
