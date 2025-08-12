import { Component, Input, Output, EventEmitter, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
})
export class InputComponent {
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() disabled = false;

  private _value = signal('');
  @Output() valueChange = new EventEmitter<string>();

  @Input()
  get value(): string {
    return this._value();
  }
  set value(val: string) {
    this._value.set(val);
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this._value.set(input.value);
    this.valueChange.emit(input.value);
  }
}