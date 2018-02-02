import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HereroDetailComponent } from './herero-detail.component';

describe('HereroDetailComponent', () => {
  let component: HereroDetailComponent;
  let fixture: ComponentFixture<HereroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HereroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HereroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
