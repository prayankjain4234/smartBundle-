import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleRuleSetComponent } from './bundle-rule-set.component';

describe('BundleRuleSetComponent', () => {
  let component: BundleRuleSetComponent;
  let fixture: ComponentFixture<BundleRuleSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleRuleSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleRuleSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
