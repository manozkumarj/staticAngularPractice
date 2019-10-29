import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalUsersCreateComponent } from './local-users-create.component';

describe('LocalUsersCreateComponent', () => {
  let component: LocalUsersCreateComponent;
  let fixture: ComponentFixture<LocalUsersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalUsersCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalUsersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
