import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  constructor(
    public photoService: PhotoService,
    private alertController: AlertController 
  ) {}

  async showResolutionOptions() {
    const alert = await this.alertController.create({
      header: 'Select Resolution',
      message: 'Choose the resolution for the photo.',
      buttons: [
        {
          text: 'Full Resolution',
          handler: () => {
            this.photoService.setPhotoQuality(100);
            this.addPhotoToGallery();
          },
        },
        {
          text: '50% Resolution',
          handler: () => {
            this.photoService.setPhotoQuality(50);
            this.addPhotoToGallery();
          },
        },
      ],
    });
    await alert.present();
  }

  takePhotoAtHalfResolution() {
    this.photoService.setPhotoQuality(50); 
    this.addPhotoToGallery();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }
}
