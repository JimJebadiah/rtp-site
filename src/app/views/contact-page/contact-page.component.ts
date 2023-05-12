import {Component, OnInit} from '@angular/core';
import {AssetService} from "../../services/asset-service";
import {AbstractPage} from "../abstract-page";
import {BlankError, EmailService} from "../../services/email-service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.less']
})
export class ContactPageComponent extends AbstractPage implements OnInit {
  constructor(assetService: AssetService, private readonly emailService: EmailService, private readonly snackBar: MatSnackBar) {
    super(assetService);
  }

  name: string = '';
  email: string = '';
  message: string = '';

  contact: boolean = true;

  openSnackBar(message: string) {
    this.snackBar.open(message, undefined, {duration: 2000, panelClass: ['blue-background']});
  }

  sendEmail() {
    try {
      this.emailService.sendEmail(this.email, this.message, this.name, '').subscribe(
        (next) => {
          this.openSnackBar('Email Sent Successfully!');
          this.contact = false;
          this.clearFields();
        }
      );
    } catch (e: any) {
      this.openSnackBar('Missing Fields!');
    }
  }

  private clearFields() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
