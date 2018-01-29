import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleritesComponent } from './battlerites.component';

describe('BattleritesComponent', () => {
  let component: BattleritesComponent;
  let fixture: ComponentFixture<BattleritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
