import { Injectable } from '@angular/core';
import { Product, Favourite } from './discover.model';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private _product = new BehaviorSubject<Product[]>([
    new Product(
      'P1',
      'Senka',
      'Perfect Whip',
      'Produk Dari Shiseido yang diklaim menjadi brand No.1 di Jepang ini memiliki banyak fungsi terutama dalam membersihkan kotoran pada wajah sampai ke dalam pori-pori sekalipun.',
      'https://www.watsons.co.id/medias/sys_master/front/zoom/8934176391198.jpg',
      70000,
      0.86
    ),
    new Product(
      'P2',
      'Shiseido',
      'Perfect Whip White',
      'Produk Dari Shiseido yang diklaim menjadi brand No.1 di Jepang ini memiliki banyak fungsi terutama dalam membersihkan kotoran pada wajah sampai ke dalam pori-pori sekalipun.',
      'https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/1/6/4/7/21647.jpg',
      70000,
      0.79
    )
  ]);

  private _favourite = new BehaviorSubject<Favourite[]>([]);

  get review() {
    return this._product.asObservable();
  }

  get favourite() {
    return this._favourite.asObservable();
  }

  addJoin(p: Product){
    const newFav = new Favourite(
      p.id,
      p.brand,
      p.subBrand,
      p.imageUrl,
      true
    );
    this.favourite.pipe(take(1)).subscribe(fav => {
      this._favourite.next(fav.concat(newFav));
    })
  }

  removeJoin(id: string){
    return this.favourite.pipe(
      take(1),
      map(fav => {
        return {...fav.find(p => p.id !== id)};
      })
    );
  }

  getReview(id: string){
    return this.review.pipe(
      take(1),
      map(review => {
        return {...review.find(p => p.id === id)};
      })
    );
  }

  getFavourite(id: string){
    return this.favourite.pipe(
      take(1),
      map(fav => {
        return {...fav.find(p => p.id === id)};
      })
    );
  }

  constructor() { }
}
