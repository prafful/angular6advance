import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteServiceDataComponent } from './remote-service-data.component';

describe('RemoteServiceDataComponent', () => {
  let component: RemoteServiceDataComponent;
  let fixture: ComponentFixture<RemoteServiceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteServiceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
