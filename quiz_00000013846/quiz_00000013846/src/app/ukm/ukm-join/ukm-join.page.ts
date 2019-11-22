import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Ukm } from '../ukm.model';
import { UkmService } from '../ukm.service';

@Component({
  selector: 'app-ukm-join',
  templateUrl: './ukm-join.page.html',
  styleUrls: ['./ukm-join.page.scss'],
})
export class UkmJoinPage implements OnInit {

  ukm: Ukm;
  constructor(
    private ukmService: UkmService,
    private route: ActivatedRoute, 
    private navCtrl: NavController,
    private alertController: AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('ukmId')) {
        this.navCtrl.navigateBack('../ukm');
        return;
      }
      this.ukm = this.ukmService.getUkm(paramMap.get('ukmId'));
    });
  }

  async addUkm(ukm: Ukm) {
    const alert = await this.alertController.create({
      header: 'Beneran Mau Join?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Join',
          handler: () => {
            this.ukmService.addToMyUkm(ukm);
            this.navCtrl.navigateBack('/ukm');
          }
        }
      ]
    });
    await alert.present();
  }
}
