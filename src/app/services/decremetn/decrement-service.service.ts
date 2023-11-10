import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecrementService {

  decrement(data: number): number {
    return data - 1;
  }
}
