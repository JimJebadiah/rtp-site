import {Injectable} from "@angular/core";
import {AssetService, Pinata} from "./asset-service";
import {LangUtils} from "../lang-utils";
import {Observable, of, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PinataService {
  constructor(private readonly assetSvc: AssetService) { }

  pinata: Map<string, Pinata> = new Map<string, Pinata>();

  getAllPinata(): Observable<Map<string, Pinata>> {
    if (!LangUtils.isEmpty(this.pinata)) {
      return of(this.pinata);
    } else {
      const pinataSubject = new Subject<Map<string, Pinata>>();
      const map = new Map<string, Pinata>();
      this.assetSvc.loadPinata().subscribe((pinata) => {
        pinata.forEach((p) => map.set(p.name.toLowerCase(), p));
        this.pinata = map;
        pinataSubject.next(this.pinata);
      });
      return pinataSubject.asObservable();
    }
  }

  getPinata(name: string): Observable<Pinata | undefined> {
    if (!LangUtils.isEmpty(this.pinata)) {
      return of(this.pinata.get(name.toLowerCase()));
    } else {
      const pinataSubject = new Subject<Pinata | undefined>();
      this.getAllPinata().subscribe((p) => {
        pinataSubject.next(p.get(name.toLowerCase()));
      });
      return pinataSubject.asObservable();
    }
  }
}
