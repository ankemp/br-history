import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentfulContainerComponent } from './contentful-container.component';

describe('ContentfulContainerComponent', () => {
  let component: ContentfulContainerComponent;
  let fixture: ComponentFixture<ContentfulContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentfulContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentfulContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
