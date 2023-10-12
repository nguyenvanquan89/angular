import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'app-voter',
    template:`
        <h4>{{name}}</h4>
        <button type="button" (click)="vote(true)" [disabled]="disVote">Agree</button>
        <button type="button" (click)="vote(false)" [disabled]="disVote">Diagree</button>
    `
})
export class VoterComponent{
    @Input() name ='';
    @Output() voted = new EventEmitter<boolean>();
    disVote = false;

    vote(agree:boolean) {
        this.voted.emit(agree);
        this.disVote = true;
    }
}