import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templates';
  currentCustomer = 'Maria';
  itemImageUrl= "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  classTable = "table table-dark table-bordered";
  isUnchanged = true;
  currentItems = [{
    id: 21,
    name: 'phone'
  }];

  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';

  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
  actionName = "Create and set an attribute";
  isSpecial = true;
  canSave = true;
  classExpression = 'special clearance';
  styleExpression = 'border: solid red 3px';
  color = 'blue';
  border = '.5rem dashed black';

  //Enable or disable button;
  OnAbleButton(isUnchanged: boolean) {
    this.isUnchanged = !isUnchanged;
  }

  //Two way binding
  fontSizePx = 16;

}
