import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantStatsComponent } from './participant-stats.component';

describe('ParticipantStatsComponent', () => {
  let component: ParticipantStatsComponent;
  let fixture: ComponentFixture<ParticipantStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
