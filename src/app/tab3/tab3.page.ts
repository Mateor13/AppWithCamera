import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit, OnDestroy {

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