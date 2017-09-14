import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';

import { SettingsService } from '../../../core/settings/settings.service';
import { ThemesService } from '../../../core/themes/themes.service';

@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss']
})
export class ThemeSettingsComponent implements OnInit {
  currentTheme: any;
  selectedLanguage: string;
  image:any;
  data : appNameInterface;
  
  constructor(public settings: SettingsService, public themes: ThemesService,public SettingService:AppService , private router:Router) {
    this.image = {};
    this.data  = {
      name:''
    }
    // this.selectedLanguage = this.getLangs()[0].code;
  }

  ngOnInit() {  
  }
  setTheme() {
    localStorage.setItem('currentTheme', this.currentTheme);
    this.themes.setTheme(this.currentTheme);
    // this.SettingService.url = 'http://localhost:4200/src/app/shared/data.json';
    // this.SettingService.data = this.currentTheme;
    // this.SettingService.postData().subscribe(res => {
    // });    
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
saveLogo(){
  localStorage.setItem('logo',this.image.src);
  //this.themes.setLogo(this.image.src);
  this.router.navigate(['/dashboard']);
}
saveAppName(data){
  localStorage.setItem('appName',data.name);
 // data.resetForm();
}
  // getLangs() {
  //   return this.translator.getAvailableLanguages();
  // }

  // setLang(value) {
  //   this.translator.useLanguage(value);
  // }
}

export class appNameInterface{
  name:String
}
