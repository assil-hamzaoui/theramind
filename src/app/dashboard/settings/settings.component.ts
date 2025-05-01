import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  currentTab: string = 'account';

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tab: string): void {
    this.currentTab = tab;
  }
}


