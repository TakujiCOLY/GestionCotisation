import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreUpComponent } from './membre-up.component';

describe('MembreUpComponent', () => {
  let component: MembreUpComponent;
  let fixture: ComponentFixture<MembreUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
