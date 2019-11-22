import { Injectable } from '@angular/core';
import { Target } from './targetgbt.model';


@Injectable({
  providedIn: 'root'
})
export class TargetgbtService {
  private myTarget: Target[] = [];

  constructor() { }

  addToMyTarget(t: Target) {
    this.myTarget.push(t);
  }

  removeFromMyTarget(id: string) {
    this.myTarget = this.myTarget.filter(t => {
      return t.id !== id;
    });
  }

  getMyTarget() {
    return [...this.myTarget];
  }


}
