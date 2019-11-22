import { Component, OnInit } from '@angular/core';
import { TargetgbtService } from './targetgbt.service';
import { Target } from './targetgbt.model';
import { IonItemSliding, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-targetgbt',
  templateUrl: './targetgbt.page.html',
  styleUrls: ['./targetgbt.page.scss'],
})
export class TargetgbtPage implements OnInit {
  loadedTarget: Target[];
  myTarget: Target[];

  constructor(private targetgbtService: TargetgbtService, private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.loadedTarget = this.targetgbtService.getMyTarget();
  }

  ionViewWillEnter() {
    this.loadedTarget = this.targetgbtService.getMyTarget();
    console.log(this.myTarget);
  }

  onCancelMyTarget(id: string) {
    this.actionSheetCtrl.create({
      header: 'Yakin gak gebet dia lagi?',
      buttons: [
        {
          text: 'Yakin, hapus dari daftar',
          handler: () => {
            this.targetgbtService.removeFromMyTarget(id);
            this.loadedTarget = this.targetgbtService.getMyTarget();
          }
        },
        {
          text: 'Gak yakin, kembali',
          role: 'cancel'
        }
      ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });
    
    
  }

  // onCancel(id: string, slidingEl: IonItemSliding) {
  //   slidingEl.close;
  //   this.loadedTarget = this.targetgbtService.getMyTarget();
  // }

}
