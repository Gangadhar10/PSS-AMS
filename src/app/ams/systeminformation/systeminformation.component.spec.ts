import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysteminformationComponent } from './systeminformation.component';

describe('SysteminformationComponent', () => {
  let component: SysteminformationComponent;
  let fixture: ComponentFixture<SysteminformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysteminformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysteminformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
