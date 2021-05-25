import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TessstComponent } from './tessst.component';

describe('TessstComponent', () => {
  let component: TessstComponent;
  let fixture: ComponentFixture<TessstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TessstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TessstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
