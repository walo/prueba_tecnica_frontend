import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(url, { params, headers }).pipe(
      catchError(this.handleError)
    );
  }

  post<T>(url: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, body, { params, headers }).pipe(
      catchError(this.handleError)
    );
  }

  put<T>(url: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(url, body, { params, headers }).pipe(
      catchError(this.handleError)
    );
  }

  delete<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(url, { params, headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    // Aquí se puede agregar lógica de logging o transformación del error
    return throwError(() => error);
  }
}