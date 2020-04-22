import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalAppComponent } from './internal-app.component';

describe('InternalAppComponent', () => {
  let component: InternalAppComponent;
  let fixture: ComponentFixture<InternalAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
