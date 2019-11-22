import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article, Product } from '../discover.model';
import { DiscoverService } from '../discover.service';
import { SegmentChangeEventDetail } from '@ionic/core';
import { ReviewService } from '../review.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  category: string = "discover";
  article: Article[];
  listArticle: Article[];
  review: Product[];
  private reviewSub: Subscription;

  constructor(private discoverSvc: DiscoverService, private reviewSvc: ReviewService) { }

  ngOnInit() {
    this.article = this.discoverSvc.discover;
    this.listArticle = this.article.slice(1);
    this.reviewSub = this.reviewSvc.review.subscribe(review => {
      this.review = review;
    });
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }

  getItems(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.review = this.review.filter((rev) => {
        return (rev.subBrand.toLowerCase().indexOf(val.toLowerCase()) > -1 || rev.brand.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.reviewSub = this.reviewSvc.review.subscribe(review => {
        this.review = review;
      });
    }
  }

  ngOnDestroy() {
    this.reviewSub.unsubscribe();
  }

}
