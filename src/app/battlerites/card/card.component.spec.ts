import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleriteCardComponent } from './card.component';

describe('CardComponent', () => {
  let component: BattleriteCardComponent;
  let fixture: ComponentFixture<BattleriteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BattleriteCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleriteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
