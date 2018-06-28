import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoparentComponent } from './ioparent.component';

describe('IoparentComponent', () => {
  let component: IoparentComponent;
  let fixture: ComponentFixture<IoparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
