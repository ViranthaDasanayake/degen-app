import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor() {}

  ngOnInit() {}
  navigate(link: any) {
    window.open(link, '_blank');
  }
}
