import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../../shared/services/settings/settings.service';
import { ThemesService } from '../../../shared/services/themes/themes.service';


@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss']
})
export class ThemeSettingsComponent implements OnInit {
  currentTheme: any;
  selectedLanguage: string;

  constructor(public settings: SettingsService, public themes: ThemesService) {
    this.currentTheme = themes.getDefaultTheme();
    // this.selectedLanguage = this.getLangs()[0].code;
  }

  ngOnInit() {
  }
  setTheme() {
    this.themes.setTheme(this.currentTheme);
  }

  // getLangs() {
  //   return this.translator.getAvailableLanguages();
  // }

  // setLang(value) {
  //   this.translator.useLanguage(value);
  // }
}
