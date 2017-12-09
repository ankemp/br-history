import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDetailsContainerComponent } from './match-details-container.component';

describe('MatchDetailsContainerComponent', () => {
  let component: MatchDetailsContainerComponent;
  let fixture: ComponentFixture<MatchDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
