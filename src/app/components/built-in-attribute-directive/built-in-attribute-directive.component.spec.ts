import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInAttributeDirectiveComponent } from './built-in-attribute-directive.component';

describe('BuiltInAttributeDirectiveComponent', () => {
  let component: BuiltInAttributeDirectiveComponent;
  let fixture: ComponentFixture<BuiltInAttributeDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltInAttributeDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInAttributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
