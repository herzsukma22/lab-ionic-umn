import { Injectable } from '@angular/core';
import { Ukm } from './ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UkmService {

  private _ukm: Ukm[] = [
    new Ukm(
      'u1',
      'UKM Ultima Sonora ( Paduan Suara )',
      'Berdiri tahun 2007, UKM ini banyak tampil untuk memenuhi acara dalam dan luar kampus, sampai berkompetisi di festival padus internasional.',
      'https://studn.id/assets/images/community/logo/UltimaSonora_646195c797ed0d45e58b66cad0725fb1.png',
    ),
    new Ukm(
      'u2',
      'UKM Tracce (Traditional Dance)',
      ' Lewat Tracce, kamu bisa belajar musik dan tarian tradisional khas tanah air.',
      'http://bem.umn.ac.id/wp-content/uploads/2017/01/TRACCE-300x298.png',
    ),
    new Ukm(
      'u3',
      'UKM Teater katak',
      'Sampai sekarang, Teater KATAK fokus bergerak pada segala aspek seni teater, mulai dari proses produksi depan hingga belakang panggung.',
      'http://bem.umn.ac.id/wp-content/uploads/2017/01/KATAK-249x300.png',
    ),
    new Ukm(
      'u4',
      'UKM Qorie',
      'Jangan ngaku pecinta Korea kalau belum ikut UKM yang satu ini! QORIE atau Korea Anthusiasem bisa menjadi wadah untuk kamu para pecinta budaya Korea.',
      'https://pbs.twimg.com/profile_images/436765832547278848/xghsqWWX_400x400.jpeg',
    ),
    new Ukm(
      'u5',
      'UKM J-Cafe (Japanese Anime Enthusiast)',
      'Akrab dengan cosplay, anime, dan manga? Pecinta kebudayaan dan musik Jepang? Kalau begitu, kamu harus segera bergabung dengan J-CAFÉ! UKM ini memiliki beragam divisi yang bisa kamu pilih sesuai dengan minatmu, antara lain Ilustrasi, Musik, Cosplay, Culture, Trading Card Game, Visual Novel, serta Toys.',
      'https://pbs.twimg.com/profile_images/378800000254419608/3b875bfd7776adfc52a5d004c37f3c86_400x400.jpeg',
    ),
  ];

  private myUkm: Ukm[] = [];

  constructor () { }

  addToMyUkm(ukm: Ukm) {
    this.myUkm.push(ukm);
  }

  removeFromMyUkm(id: string) {
    this.myUkm = this.myUkm.filter(u => {
      return u.id !== id;
    });
  }

  getMyUkm() {
    return [...this.myUkm];
  }


  get ukm() {
    return[...this._ukm];
  }

  getUkm(id: string) {
    return {...this._ukm.find(p => 
      p.id === id
    )};
  }
}
