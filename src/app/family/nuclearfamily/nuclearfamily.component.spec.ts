import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuclearfamilyComponent } from './nuclearfamily.component';

describe('NuclearfamilyComponent', () => {
  let component: NuclearfamilyComponent;
  let fixture: ComponentFixture<NuclearfamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuclearfamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuclearfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
