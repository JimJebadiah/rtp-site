import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {APP_BASE_HREF} from "@angular/common";
import {map, Observable} from "rxjs";


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

  loadDownloads(): Observable<Array<DownloadObject>> {
    const path = this.constructAssetPath('assets/data/downloads.json');
    return this.loadAsset(path).pipe(
      map((obj) => {
        let source = {downloads: [{version: TEMPLATE_VERSION, platforms: []}]} as DownloadSource;
        try {
          source = obj as DownloadSource;
        } catch (e) {
          console.error(`Error occured trying to parse ${obj} as download source object`);
        }
        return source.downloads;
      }),
    )
  }

  loadAsset(path: string): Observable<Object> {
    return this.http.get(path);
  }
}

export interface GallerySource {
  images: ReadonlyArray<string>,
}

export const TEMPLATE_VERSION = 'template'

export interface DownloadSource {
  downloads: Array<DownloadObject>
}

export interface DownloadObject {
  version: string,
  platforms: ReadonlyArray<{
    platform: string,
    link: string,
  }>
}
