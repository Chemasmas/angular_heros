import { TestBed, inject } from '@angular/core/testing';

import { MesessageService } from './mesessage.service';

describe('MesessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MesessageService]
    });
  });

  it('should be created', inject([MesessageService], (service: MesessageService) => {
    expect(service).toBeTruthy();
  }));
});
