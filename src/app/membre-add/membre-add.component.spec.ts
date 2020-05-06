import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreAddComponent } from './membre-add.component';

describe('MembreAddComponent', () => {
  let component: MembreAddComponent;
  let fixture: ComponentFixture<MembreAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
