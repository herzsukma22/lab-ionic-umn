import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'http://www.desertsun.co.uk/blog/images/Apartment%201.jpg',
      100000000
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'http://static3.businessinsider.com/image/5681799ce6183e55008b526d',
      125000000
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartemen Murah',
      'http://lh3.googleusercontent.com/-F5aY6yinaiA/TW_NzlRJppI/AAAAAAA',
      500000000
    ),
  ];

  get places() {
    return[...this._places]
  }

  constructor() { }

  getPlace(id: string){
    return {...this._places.find(p => p.id === id)};
  }
}
