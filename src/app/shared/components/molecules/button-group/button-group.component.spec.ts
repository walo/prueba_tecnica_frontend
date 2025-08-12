import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonGroupComponent } from './button-group.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ButtonGroupComponent', () => {
  let component: ButtonGroupComponent;
  let fixture: ComponentFixture<ButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGroupComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonGroupComponent);
    component = fixture.componentInstance;
    // Se elimina detectChanges aquí para evitar ExpressionChangedAfterItHasBeenCheckedError
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should accept buttons input', () => {
    const buttons = [
      { label: 'Button 1' },
      { label: 'Button 2', disabled: true },
    ];
    component.buttons = buttons;
    fixture.detectChanges();

    expect(component.buttons).toEqual(buttons);
  });

  it('should emit buttonClick event with correct index', () => {
    spyOn(component.buttonClick, 'emit');

    component.onButtonClick(1);

    expect(component.buttonClick.emit).toHaveBeenCalledWith(1);
  });
});