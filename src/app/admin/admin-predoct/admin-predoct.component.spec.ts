import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPredoctComponent } from './admin-predoct.component';

describe('AdminPredoctComponent', () => {
  let component: AdminPredoctComponent;
  let fixture: ComponentFixture<AdminPredoctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPredoctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPredoctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
