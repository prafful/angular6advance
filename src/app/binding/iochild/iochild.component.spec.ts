import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IochildComponent } from './iochild.component';

describe('IochildComponent', () => {
  let component: IochildComponent;
  let fixture: ComponentFixture<IochildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IochildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IochildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
