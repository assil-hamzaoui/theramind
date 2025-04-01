import { Component } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent {
  isVisible: boolean = false; // La modal est cachée par défaut

  constructor() {}

  // Méthode pour afficher la modal
  afficher() {
    this.isVisible = true;
  }

  // Méthode pour fermer la modal
  fermer() {
    this.isVisible = false;
  }
}
