import { TestBed, inject } from '@angular/core/testing';

import { CrudService } from './crud.service';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudService]
    });
  });

  it('should be created', inject([CrudService], (service: CrudService) => {
    expect(service).toBeTruthy();
  }));
});
