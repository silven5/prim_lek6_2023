import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TriangleviewComponent } from './shared/view/triangleview/triangleview.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, ReactiveFormsModule, TriangleviewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {
  constructor() { }
}
