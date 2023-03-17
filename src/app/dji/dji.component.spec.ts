import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjiComponent } from './dji.component';

describe('DjiComponent', () => {
  let component: DjiComponent;
  let fixture: ComponentFixture<DjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DjiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
