import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.scss'],
})
export class MinusComponent {
  @Output() decrement = new EventEmitter<void>();
}
