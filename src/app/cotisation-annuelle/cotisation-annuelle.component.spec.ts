import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotisationAnnuelleComponent } from './cotisation-annuelle.component';

describe('CotisationAnnuelleComponent', () => {
  let component: CotisationAnnuelleComponent;
  let fixture: ComponentFixture<CotisationAnnuelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotisationAnnuelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotisationAnnuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
