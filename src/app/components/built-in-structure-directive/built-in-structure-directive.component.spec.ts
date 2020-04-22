import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInStructureDirectiveComponent } from './built-in-structure-directive.component';

describe('BuiltInStructureDirectiveComponent', () => {
  let component: BuiltInStructureDirectiveComponent;
  let fixture: ComponentFixture<BuiltInStructureDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltInStructureDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInStructureDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
