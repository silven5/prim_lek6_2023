import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Triangle } from './model/triangle'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab3Page {
  triangle = new Triangle();
  constructor() { }
  ras(a: any, b: any) {
    this.triangle.A = a;
    this.triangle.B = b;
    return this.triangle.C.toFixed(2);
  }
}
