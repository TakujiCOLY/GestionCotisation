import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotisationUpdateComponent } from './cotisation-update.component';

describe('CotisationUpdateComponent', () => {
  let component: CotisationUpdateComponent;
  let fixture: ComponentFixture<CotisationUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotisationUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotisationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
