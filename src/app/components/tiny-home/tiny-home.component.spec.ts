import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyHomeComponent } from './tiny-home.component';

describe('TinyHomeComponent', () => {
  let component: TinyHomeComponent;
  let fixture: ComponentFixture<TinyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
