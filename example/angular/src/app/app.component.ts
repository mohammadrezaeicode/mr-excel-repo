import { Component } from '@angular/core';
import * as Ex from './example';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';
  items = Array(35);
  generateExcel(i: number) {
    if (i != 23 && i > 0 && i <= 35) {
      import('mr-excel').then((m) => {
        m.generateExcel((Ex[('ex' + i) as keyof object] as Function)());
      });
    } else {
      import('mr-excel').then((m) => {
        m.generateExcel((Ex['ex22' as keyof object] as Function)());
      });
    }
  }
}
