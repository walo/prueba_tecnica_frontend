import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let app: App;
  let fixture: ComponentFixture<App>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(App);
    app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

