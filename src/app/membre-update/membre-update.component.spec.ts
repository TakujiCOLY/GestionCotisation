import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreUpdateComponent } from './membre-update.component';

describe('MembreUpdateComponent', () => {
  let component: MembreUpdateComponent;
  let fixture: ComponentFixture<MembreUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
