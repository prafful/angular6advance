import { TestBed, inject } from '@angular/core/testing';

import { RemoteapiserviceService } from './remoteapiservice.service';

describe('RemoteapiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteapiserviceService]
    });
  });

  it('should be created', inject([RemoteapiserviceService], (service: RemoteapiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
