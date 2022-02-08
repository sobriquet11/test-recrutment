import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.css']
})
export class ConfigurationPageComponent implements OnInit {
  enable!: boolean;



  constructor() {

  }

  ngOnInit(): void {
  }
  onChange(enable: boolean) {

    if (enable) {
      this.enable = enable;
    } else {
      this.enable= !this.enable;
    }

    }
}
