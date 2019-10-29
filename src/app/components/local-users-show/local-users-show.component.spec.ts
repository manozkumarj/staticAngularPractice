import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalUsersShowComponent } from './local-users-show.component';

describe('LocalUsersShowComponent', () => {
  let component: LocalUsersShowComponent;
  let fixture: ComponentFixture<LocalUsersShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalUsersShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalUsersShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
