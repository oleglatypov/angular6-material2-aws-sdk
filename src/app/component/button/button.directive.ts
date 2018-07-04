import { Directive } from '@angular/core';

@Directive({
  selector: 'button[mnews-button-large],button[stb-button-large],a[mnews-button-large],a[stb-button-large]',
  host: { 'class': 'mnews-button-lg' }
})

export class ButtonDirective {
  constructor() {
  }
}
