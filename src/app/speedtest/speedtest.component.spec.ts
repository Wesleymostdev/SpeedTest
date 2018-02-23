import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedtestComponent } from './speedtest.component';

describe('SpeedtestComponent', () => {
  let component: SpeedtestComponent;
  let fixture: ComponentFixture<SpeedtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
