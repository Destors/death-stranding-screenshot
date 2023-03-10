import { Component } from '@angular/core';
import { mainCtaDesc } from './constants/main-cta';

@Component({
  selector: 'app-main-cta',
  templateUrl: './main-cta.component.html',
  styleUrls: ['./main-cta.component.scss'],
})
export class MainCtaComponent {
  mainCtaDesc = mainCtaDesc;
}
