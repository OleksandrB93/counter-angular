import { Component } from '@angular/core';
import { IncrementService } from './services/increment/increment-service.service';
import { DecrementService } from './services/decremetn/decrement-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-counter';
  data: number = 5;

  constructor(
    private incrementService: IncrementService,
    private decrementService: DecrementService
  ) {}

  increment() {
    this.data = this.incrementService.increment(this.data);
  }

  decrement() {
    this.data = this.decrementService.decrement(this.data);
  }
}
