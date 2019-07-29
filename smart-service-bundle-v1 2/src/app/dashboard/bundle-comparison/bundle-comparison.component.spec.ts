import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleComparisonComponent } from './bundle-comparison.component';

describe('BundleComparisonComponent', () => {
  let component: BundleComparisonComponent;
  let fixture: ComponentFixture<BundleComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
