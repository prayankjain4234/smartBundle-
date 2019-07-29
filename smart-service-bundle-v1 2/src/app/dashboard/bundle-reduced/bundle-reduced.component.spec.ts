import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleReducedComponent } from './bundle-reduced.component';

describe('BundleReducedComponent', () => {
  let component: BundleReducedComponent;
  let fixture: ComponentFixture<BundleReducedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleReducedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleReducedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
