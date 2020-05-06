import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreDetailComponent } from './membre-detail.component';

describe('MembreDetailComponent', () => {
  let component: MembreDetailComponent;
  let fixture: ComponentFixture<MembreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
