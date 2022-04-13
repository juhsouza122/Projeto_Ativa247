import { TestBed } from '@angular/core/testing';
import { ToastrServiceService } from './toastr-service.service';

describe('ToastrServiceServiceService', () => {
  let service: ToastrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
