import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit, OnDestroy {

  constructor(
    public photoService: PhotoService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() { }

  async addPhotoToGallery(tab: string) {
    await this.photoService.addNewToGallery(tab);
    this.navCtrl.navigateForward(`/tabs/${tab}`);
  }

  async showTabSelection() {
    const alert = await this.alertCtrl.create({
      header: 'Save Photo To Tab',
      buttons: [
        {
          text: 'Tab 1',
          handler: () => {
            this.addPhotoToGallery('tab1');
          },
        },
        {
          text: 'Tab 3',
          handler: () => {
            this.addPhotoToGallery('tab3');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ],
    });
    await alert.present();
  }

  ngOnDestroy() {
  }
}