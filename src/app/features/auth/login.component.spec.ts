import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import * as AuthActions from '../../state/store/auth.actions';
import { provideZonelessChangeDetection } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore;
  const initialState = {
    auth: {
      user: null,
      token: null,
      loading: false,
      error: null,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
      providers: [
            provideZonelessChangeDetection(),
            provideMockStore({ initialState })
        ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch login action on valid form submit', () => {
    spyOn(store, 'dispatch');
    component.loginForm.setValue({ username: 'user', password: 'password' });
    component.onSubmit();
    expect(store.dispatch).toHaveBeenCalledWith(
      AuthActions.login({ username: 'user', password: 'password' })
    );
  });

  it('should mark all fields as touched on invalid form submit', () => {
    spyOn(component.loginForm, 'markAllAsTouched');
    component.loginForm.setValue({ username: '', password: '' });
    component.onSubmit();
    expect(component.loginForm.markAllAsTouched).toHaveBeenCalled();
  });
});