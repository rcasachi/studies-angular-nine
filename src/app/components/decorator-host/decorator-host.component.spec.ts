import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorHostComponent } from './decorator-host.component';

describe('DecoratorHostComponent', () => {
  let component: DecoratorHostComponent;
  let fixture: ComponentFixture<DecoratorHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratorHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
