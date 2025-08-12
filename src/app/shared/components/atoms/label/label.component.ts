import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  standalone: true,
})
export class LabelComponent {
  @Input() text = '';
  @Input() forId = '';
}