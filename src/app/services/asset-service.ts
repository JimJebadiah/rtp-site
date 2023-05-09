import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(private readonly http: HttpClient) {}

  loadGalleryImages(): Observable<GallerySource> {
    return this.loadAsset('/assets/images/gallery/gallery.json').pipe(
      map((obj) => obj as GallerySource),
    );
  }

  loadAsset(path: string): Observable<Object> {
    return this.http.get(path);
  }
}

export interface GallerySource {
  images: ReadonlyArray<string>,
}
