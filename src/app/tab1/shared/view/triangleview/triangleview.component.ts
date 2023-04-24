import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';
import { TriangleService } from '../../controller/triangle.service';
@Component({
  selector: 'app-triangleview',
  templateUrl: './triangleview.component.html',
  styleUrls: ['./triangleview.component.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
})

export class TriangleviewComponent implements OnInit {

  tringleForm!: FormGroup;
  triangles!: any[];
  constructor(
    private triangleservice: TriangleService,
    private fb: FormBuilder
  ) {
    this.tringleForm = this.fb.group({
      a: ['3', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      b: ['4', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
    })

  }

  ngOnInit() {


  }
  add(tringleForm: any) {
    this.triangleservice.add(tringleForm.a, tringleForm.b);
    this.triangles = this.triangleservice.triangles;
  }

}
