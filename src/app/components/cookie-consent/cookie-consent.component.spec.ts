import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css']
})
export class CookieConsentComponent implements OnInit {
  showPopup: boolean = true;

  ngOnInit() {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    if (localStorage.getItem('cookiesAccepted') === 'true') {
      this.showPopup = false;
    }
  }

  acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    this.showPopup = false;
  }
}
