import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product, Favourite } from '../discover.model';
import { ReviewService } from '../review.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit, OnDestroy {

  fav: Favourite[];
  favSub: Subscription;

  constructor(private reviewSvc: ReviewService) { }

  ngOnInit() {
    this.favSub = this.reviewSvc.favourite.subscribe(fav => {
      this.fav = fav;
    })
  }

  ngOnDestroy(){
    if(this.favSub){
      this.favSub.unsubscribe;
    }
  }

}
