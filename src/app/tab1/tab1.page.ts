import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit, OnDestroy {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
      this.photoService.loadSaved();
  }

  ionViewDidEnter() {
    if (!this.photoService.loaded) {
      this.photoService.loadSaved();
    }
  }

  ngOnDestroy() {
  }
}