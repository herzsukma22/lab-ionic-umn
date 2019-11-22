import { Injectable } from '@angular/core';
import { Article } from './discover.model';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  private _article: Article[] = [
    new Article(
      'A1',
      '5 Tanda Kulit Terlalu Banyak Menggunakan Produk Skincare',
      'Di satu sisi, hal tersebut tentunya memudahkan kita untuk menemukan produk yang sesuai dengan kebutuhan kulit. Namun di sisi lain, kita bisa terbuai dengan ambisi kulit cantik hingga melampaui batas kecukupan, alias menggunakan terlalu banyak skincare! Nah, lho. <br><br> Sebenarnya, sampai mana batas cukup dalam penggunaan skincare? Bagaimana pula tanda yang bisa dilihat kalau kulit terlalu banyak menggunakan skincare? Simak penjelasannya di bawah ini, yuk!',
      'https://cdn0-production-images-kly.akamaized.net/6hf_7Dx5bMx3OdJcZBggyviNF9o=/680x383/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2826297/original/057119800_1560308732-shutterstock_1145177030.jpg'
    ),
    new Article(
      'A2',
      '5 Tanda Kulit Terlalu Banyak Menggunakan Produk Skincare',
      'Di satu sisi, hal tersebut tentunya memudahkan kita untuk menemukan produk yang sesuai dengan kebutuhan kulit. Namun di sisi lain, kita bisa terbuai dengan ambisi kulit cantik hingga melampaui batas kecukupan, alias menggunakan terlalu banyak skincare! Nah, lho. <br><br> Sebenarnya, sampai mana batas cukup dalam penggunaan skincare? Bagaimana pula tanda yang bisa dilihat kalau kulit terlalu banyak menggunakan skincare? Simak penjelasannya di bawah ini, yuk!',
      'https://cdn0-production-images-kly.akamaized.net/6hf_7Dx5bMx3OdJcZBggyviNF9o=/680x383/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2826297/original/057119800_1560308732-shutterstock_1145177030.jpg'
    ),
  ];

  get discover() {
    return [...this._article];
  }

  getDiscover(id: string){
    return {...this._article.find(p => p.id === id)};
  }

  
  constructor() { }
}
