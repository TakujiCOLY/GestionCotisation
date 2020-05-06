import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysComponent } from './pays.component';

describe('PaysComponent', () => {
  let component: PaysComponent;
  let fixture: ComponentFixture<PaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
