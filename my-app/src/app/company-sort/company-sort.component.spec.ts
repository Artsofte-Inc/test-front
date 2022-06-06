import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySortComponent } from './company-sort.component';

describe('CompanySortComponent', () => {
  let component: CompanySortComponent;
  let fixture: ComponentFixture<CompanySortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
