import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PresenterService } from './presenter/presenter.service';
import { ITriangleView } from './view/ItriangleView';
import { triangleView } from './view/triangleview';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class Tab2Page {

  view!: ITriangleView;
  constructor(private pr: PresenterService) {
    this.view = new triangleView();

  }

  ras(a: any, b: any) {
    this.pr.loadTriangle(a, b, this.view);

  }
}
