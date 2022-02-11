import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    var arr1 = [2, 3, 4, 5, 6, 23, 4, 8];
    var arr2 = [5, 4, 3, 23, 5, 6, 7, 2, 1];
    this.getUniqueFunctions(arr1, arr2);
  }

  getUniqueFunctions(arr1, arr2) {
    const uniqueArray = [];

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (uniqueArray.indexOf(arr2[j]) === -1) {
          uniqueArray.push(arr2[j]);
        }
      }
      if (uniqueArray.indexOf(arr1[i]) === -1) {
        uniqueArray.push(arr1[i]);
      }
    }
    console.log(uniqueArray);
  }
}
