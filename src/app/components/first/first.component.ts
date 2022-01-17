import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  colorValue: string = '';
  defaultColor = 'red';


  constructor() {
  }

  ngOnInit(): void {
  }

  changeColor(value: string) {
    this.colorValue = value;
  }
}
