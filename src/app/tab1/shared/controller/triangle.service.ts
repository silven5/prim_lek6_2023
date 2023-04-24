import { Injectable } from '@angular/core';
import { Triangle } from '../model/squaretriangle';
@Injectable({
  providedIn: 'root'
})
export class TriangleService {
  triangles: Triangle[] = [];
  constructor() { }
  add(a: number, b: number) {
    let t = new Triangle(a, b);
    this.triangles.push(t);
  }
}
