import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteurCotisationComponent } from './promoteur-cotisation.component';

describe('PromoteurCotisationComponent', () => {
  let component: PromoteurCotisationComponent;
  let fixture: ComponentFixture<PromoteurCotisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoteurCotisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteurCotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
