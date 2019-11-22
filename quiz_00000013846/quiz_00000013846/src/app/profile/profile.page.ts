import { Component, OnInit } from '@angular/core';
import { UkmService } from '../ukm/ukm.service';
import { Ukm } from '../ukm/ukm.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  myUkm: Ukm[];

  constructor(private ukmService: UkmService) { }

  ngOnInit() {
    this.myUkm = this.ukmService.getMyUkm();
    console.log(this.myUkm);
  }

  ionViewWillEnter() {
    this.myUkm = this.ukmService.getMyUkm();
    console.log(this.myUkm);
  }

  onCancelMyUkm(id: string) {
    this.ukmService.removeFromMyUkm(id);
    this.myUkm = this.ukmService.getMyUkm();
  }

}
