import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRosterListComponent } from './team-roster-list.component';

describe('TeamRosterListComponent', () => {
  let component: TeamRosterListComponent;
  let fixture: ComponentFixture<TeamRosterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRosterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRosterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
