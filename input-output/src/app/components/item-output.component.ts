import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-item-output',
    templateUrl:'./item-output.component.html'
})
export class ItemOutputComponent {
    //add new item event
    @Output() newItemEvent = new EventEmitter<string>();

    //function add new item
    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }
}