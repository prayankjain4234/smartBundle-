import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardInlineComponent } from './wizard-inline.component';

describe('WizardInlineComponent', () => {
  let component: WizardInlineComponent;
  let fixture: ComponentFixture<WizardInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
