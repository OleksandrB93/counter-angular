import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss']
})
export class PlusComponent {
  @Output() increment = new EventEmitter<void>();
}
