import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { from } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class RoutingService {

    constructor(private readonly router: Router) {}

    navigateToHomePage() {
        this.navigateToPage(HOME_PATH);
    }

    navigateToAboutPage() {
        this.navigateToPage(ABOUT_PATH);
    }

    navigateToNewsPage() {
        this.navigateToPage(NEWS_PATH);
    }

    navigateToDownloadsPage() {
        this.navigateToPage(DOWNLOAD_PATH);
    }

    navigateToPolicyPage() {
        this.navigateToPage(POLICY_PATH);
    }

    navigateToContactPage() {
        this.navigateToPage(CONTACT_PATH);
    }

    navigateToWikiPage() {
        this.navigateToPage(WIKI_PATH);
    }

    navigateToPage(urlSegment: string, additionalSegments: ReadonlyArray<string> = []) {
        from(this.router.navigate([urlSegment, ...additionalSegments])).subscribe();
    }
}

export const HOME_PATH = 'home';
export const ABOUT_PATH = 'about';
export const NEWS_PATH = 'news';
export const DOWNLOAD_PATH = 'downloads';
export const POLICY_PATH = 'privacyPolicy';
export const CONTACT_PATH = 'contact';
export const WIKI_PATH = 'wiki';