import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Inject, Injectable} from "@angular/core";
import {APP_BASE_HREF} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(
    private readonly http: HttpClient,
    @Inject(APP_BASE_HREF) private readonly baseHref: string,
  ) {
  }

  constructAssetPath(path: string) {
    return this.baseHref + path;
  }

  loadGalleryImages(): Observable<GallerySource> {
    const path = this.constructAssetPath('assets/images/gallery/gallery.json');
    return this.loadAsset(path).pipe(
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
