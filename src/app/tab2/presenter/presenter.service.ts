import { Injectable } from '@angular/core';
import { TriangleMVP } from "../model/squaretriangle";
import { ITriangleView } from '../view/ItriangleView';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PresenterService {
  triangle!: TriangleMVP;
  view!: ITriangleView;
  loadTriangle(a: number, b: number, view: ITriangleView) {
    this.view = view;
    this.triangle = new TriangleMVP(a, b);
    this.view.a = "Катет a=" + this.triangle.a;
    this.view.b = "Катет b=" + this.triangle.b;
    this.view.c = "Гіпотенуза C=" + this.triangle.c.toFixed(2);
    this.view.s = "Площина S=" + this.triangle.s.toFixed(2);
  }
  constructor() {

  }
}
