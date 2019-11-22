import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerouesComponent } from './heroues.component';

describe('HerouesComponent', () => {
  let component: HerouesComponent;
  let fixture: ComponentFixture<HerouesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerouesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerouesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
