import { Component, OnInit } from '@angular/core';
import { UkmService } from './ukm.service';
import { Ukm } from './ukm.model';

@Component({
  selector: 'app-ukm',
  templateUrl: './ukm.page.html',
  styleUrls: ['./ukm.page.scss'],
})
export class UkmPage implements OnInit {
  loadedUkm: Ukm[];

  constructor(private ukmService: UkmService) { }

  ngOnInit() {
    this.loadedUkm = this.ukmService.ukm;
  }

}
