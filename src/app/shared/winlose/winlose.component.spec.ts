import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinloseComponent } from './winlose.component';

describe('WinloseComponent', () => {
  let component: WinloseComponent;
  let fixture: ComponentFixture<WinloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
