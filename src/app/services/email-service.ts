import {Injectable} from "@angular/core";
import {Observable, of, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private readonly http: HttpClient) { }

  sendEmail(returnEmail: string, message: string, name: string): Observable<any> {
    if (returnEmail === '' || message === '' || name === '') {
      throw throwError(() => new BlankError('error'));
    }
    const url: string = 'https://formspree.io/f/xeqwdvkv';
    this.http.post(url, {
      name: name,
      email: returnEmail,
      message: message,
    }).subscribe();

    return of('nice');
  }
}

export class BlankError extends Error {}
