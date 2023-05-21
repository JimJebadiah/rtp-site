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

    navigateToNewAdditionsPage() {
        this.navigateToPage(NEW_ADDITIONS_PATH);
    }

    navigateTo404() {
      this.navigateToPage(NOT_FOUND_PATH);
    }

    navigateToDiscord() {
      this.navigateToPage(DISCORD_PATH);
    }

    navigateToPatreon() {
      this.navigateToPage(PATREON_PATH);
    }

    navigateToPage(urlSegment: string, additionalSegments: ReadonlyArray<string> = []) {
        from(this.router.navigate([urlSegment, ...additionalSegments])).subscribe();
    }
}

export const HOME_PATH = 'home';
export const ABOUT_PATH = 'about';
export const NEWS_PATH = 'news';
export const ARTICLE_PATH = 'article';
export const NEW_ADDITIONS_PATH = 'new-additions';
export const DOWNLOAD_PATH = 'downloads';
export const POLICY_PATH = 'privacy-policy';
export const CONTACT_PATH = 'contact';
export const NOT_FOUND_PATH = '404';
export const WIKI_PATH = 'wiki';
export const DISCORD_PATH = 'discord';
export const PATREON_PATH = 'patreon'

export const PINATA_PATH = 'pinata'

export const PINATA_PARAM = 'pinataName'
