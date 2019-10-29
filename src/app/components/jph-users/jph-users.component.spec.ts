import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JphUsersComponent } from './jph-users.component';

describe('JphUsersComponent', () => {
  let component: JphUsersComponent;
  let fixture: ComponentFixture<JphUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JphUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JphUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
