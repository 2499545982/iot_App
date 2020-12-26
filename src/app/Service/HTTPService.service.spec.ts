/* tslint:disable:no-unused-variable */

import { TestBed,async,inject } from '@angular/core/testing';
import { HTTPService } from './HTTPService.service';

describe('Service: HTTPService',() =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [HTTPService]
        });
    });

    it('should ...',inject([HTTPService],(service: HTTPService) =>
    {
        expect(service).toBeTruthy();
    }));
});
