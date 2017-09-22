import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-library',
  templateUrl: './document-library.component.html',
  styleUrls: ['./document-library.component.scss']
})
export class DocumentLibraryComponent implements OnInit {
  keywords : any;
  constructor() {
    this.keywords = ['roofing'];
   }

  ngOnInit() {
  }

}
