import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesHostComponent } from './pipes-host.component';

describe('PipesHostComponent', () => {
  let component: PipesHostComponent;
  let fixture: ComponentFixture<PipesHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
