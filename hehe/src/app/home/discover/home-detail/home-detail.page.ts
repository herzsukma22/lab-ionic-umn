import { Component, OnInit } from '@angular/core';
import { Article } from '../../discover.model';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DiscoverService } from '../../discover.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  article: Article;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private discoverSvc: DiscoverService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('discoverId')) {
        this.navCtrl.navigateBack('/home/tabs/discover');
        return;
      }
      this.article = this.discoverSvc.getDiscover(paramMap.get('discoverId'));
    });
  }

}
