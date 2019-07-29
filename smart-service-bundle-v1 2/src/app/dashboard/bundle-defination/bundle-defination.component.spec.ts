import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleDefinationComponent } from './bundle-defination.component';

describe('BundleDefinationComponent', () => {
  let component: BundleDefinationComponent;
  let fixture: ComponentFixture<BundleDefinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleDefinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleDefinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
