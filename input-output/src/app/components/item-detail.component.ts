import { Component, Input } from '@angular/core'; // First, import Input

@Component({
    selector:'app-item-detail',
    templateUrl:'./item-detail.component.html'
})
export class ItemDetailComponent {
    @Input() item = ''; // decorate the property with @Input()
}