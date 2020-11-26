import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      
      
      <div class="header-css-class">
  <h4>back</h4>
	<ng-content select="[footer]"></ng-content>
</div>

<app-menu>
    </app-menu>
      <p>Copyright 2020 | Ajay</p>
    </div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
