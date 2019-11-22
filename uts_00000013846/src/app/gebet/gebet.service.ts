import { Injectable } from '@angular/core';
import { Gebet } from './gebet.model';

@Injectable({
  providedIn: 'root'
})
export class GebetService {
  private _gebet: Gebet[] =  [
    new Gebet(
      'g1',
      'Shinta Kusuma Dewi',
      'Aku suka cowo macho',
      'Perempuan'
    ),
    new Gebet(
      'g2',
      'Tony Hehe',
      'Aku cowo humoris',
      'Laki-laki'
    ),
    new Gebet(
      'g3',
      'Bella Humorisa',
      'Aku suka ketawa',
      'Perempuan'
    ),
    new Gebet(
      'g4',
      'Joko Pintar',
      'Aku cowo jenius',
      'Laki-laki'
    ),
    new Gebet(
      'g4',
      'John Thor',
      'Aku tinggal di Asgard',
      'Laki-laki'
    ),
  ];

  get gebet() {
    return [...this._gebet];
  }

  constructor() { }
}
