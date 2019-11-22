import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product, Favourite } from '../../discover.model';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../review.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.page.html',
  styleUrls: ['./review-detail.page.scss'],
})
export class ReviewDetailPage implements OnInit, OnDestroy {
  review: Product;
  favourite: Favourite;
  isFavourite: boolean;
  private reviewSub: Subscription;
  protected favSub: Subscription;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private reviewSvc: ReviewService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('reviewId')) {
        this.navCtrl.navigateBack('/home/tabs/discover');
        return;
      }
      this.reviewSub = this.reviewSvc.getReview(paramMap.get('reviewId')).subscribe(review => {
        this.review = review;
      });
      this.favSub = this.reviewSvc.getFavourite(paramMap.get('reviewId')).subscribe(fav => {
        this.favourite = fav;
      });

      if(this.favourite.saved){
        this.isFavourite = true;
      } else {
        this.isFavourite = false;
      }
    });
  }

  Favourite(p: Product) {
    this.isFavourite = !this.isFavourite;
    if(!this.isFavourite){
      this.reviewSvc.removeJoin(p.id);
    } else {
      this.reviewSvc.addJoin(p);
    }
    this.loading();
  }

  async loading() {
    const loading = await this.loadingCtrl.create({
      message: 'Updating your favourite Products...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  ngOnDestroy(){
    if(this.reviewSub) {
      this.reviewSub.unsubscribe();
    }
    if(this.favSub) {
      this.favSub.unsubscribe();
    }
  }

}
