import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent],
})
export class ButtonGroupComponent {
  @Input() buttons: { label: string; disabled?: boolean }[] = [];
  @Output() buttonClick = new EventEmitter<number>();

  onButtonClick(index: number): void {
    this.buttonClick.emit(index);
  }
}