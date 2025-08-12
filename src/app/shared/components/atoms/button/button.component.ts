import { Component, Input, Output, EventEmitter, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  private _label = signal('');
  @Output() clicked = new EventEmitter<void>();

  @Input()
  get label(): string {
    return this._label();
  }
  set label(val: string) {
    this._label.set(val);
  }

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}