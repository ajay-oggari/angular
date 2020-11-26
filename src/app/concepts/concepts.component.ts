import { Component, OnInit , AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
      .brownText{
        color: brown;
      }
    `
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'Contact Manager App!';
  noOfDevelopers = 10;
  dataReceivedFromChildComp='ajay';
  profileLoadedHandler:any;

  // property binding
  averageExp = 2;

  // for ngStyle
  myStyles: any = {
    backgroundColor: 'yellow',
    color: 'black'
  };

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    console.log("inside after view init ")
  }

  // event binding related
  clickMeHandler(e: any): void {
    e.target.innerText='clicked';
    e.target.disabled=true;
    
  }
  courseName="ajay";
  clicked = false;

  actionMethod() {
    console.log("actionMethod was called!");
  } 

}
 