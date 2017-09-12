import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { SettingsService } from '../../../core/settings/settings.service';
import { ThemesService } from '../../../core/themes/themes.service';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/'; 
@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss']
})
export class ThemeSettingsComponent implements OnInit {
  currentTheme: any;
  selectedLanguage: string;
  image:any;
  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    console.log(e);
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  constructor(public settings: SettingsService, public themes: ThemesService) {
    this.image = {};
    this.currentTheme = themes.getDefaultTheme();
    // this.selectedLanguage = this.getLangs()[0].code;
  }

  ngOnInit() {
  }
  setTheme() {
    this.themes.setTheme(this.currentTheme);
  }
  
  fileChangeListener($event) {
    // let image: any = new Image();
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    let that = this;
    myReader.onloadend = function(loadEvent: any) {
      that.image.src = loadEvent.target.result;
        // that.cropper.setImage(image);
    };

    myReader.readAsDataURL(file);
}

  // getLangs() {
  //   return this.translator.getAvailableLanguages();
  // }

  // setLang(value) {
  //   this.translator.useLanguage(value);
  // }
}
