import { Component, OnInit } from '@angular/core';
import { Gebet } from './gebet.model';
import { GebetService } from './gebet.service';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TargetgbtService } from '../targetgbt/targetgbt.service';

@Component({
  selector: 'app-gebet',
  templateUrl: './gebet.page.html',
  styleUrls: ['./gebet.page.scss'],
})
export class GebetPage implements OnInit {
  loadedGebet: Gebet[];
  isLoading: boolean;

  constructor(private gebetService: GebetService, private loadingCtrl: LoadingController, private router: Router, private targergbtService: TargetgbtService) { }

  ngOnInit() {
    this.loadedGebet = this.gebetService.gebet;
  }

  onAdd(gebet: Gebet) {
    this.isLoading = true;
    this.loadingCtrl.create({keyboardClose: true, message: 'Loading...'})
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/gebet');
        }, 1500);
      });
    this.targergbtService.addToMyTarget(gebet);
  }
}
