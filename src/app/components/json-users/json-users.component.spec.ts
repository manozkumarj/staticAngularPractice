import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUsersComponent } from './json-users.component';

describe('JsonUsersComponent', () => {
  let component: JsonUsersComponent;
  let fixture: ComponentFixture<JsonUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
