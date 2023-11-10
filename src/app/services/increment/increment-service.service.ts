// increment.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IncrementService {
  increment(data: number) {
    return data + 1;
  }
}
