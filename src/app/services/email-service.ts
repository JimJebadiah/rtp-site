import {Injectable} from "@angular/core";
import {AssetService, Pinata} from "./asset-service";
import {LangUtils} from "../lang-utils";
import {Observable, of, Subject, throwError} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private readonly http: HttpClient) { }

  sendEmail(returnEmail: string, message: string, name: string, path: string): Observable<any> {
    if (returnEmail === '' || message === '' || name === '') {
      throw throwError(() => new BlankError('error'));
    }
    return of('nice');
  }
}

export class BlankError extends Error {}
