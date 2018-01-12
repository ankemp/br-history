import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRosterCardComponent } from './team-roster-card.component';

describe('TeamRosterCardComponent', () => {
  let component: TeamRosterCardComponent;
  let fixture: ComponentFixture<TeamRosterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRosterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRosterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
