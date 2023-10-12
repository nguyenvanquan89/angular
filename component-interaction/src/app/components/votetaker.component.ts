import { Component } from "@angular/core";

@Component({
    selector:'app-votetaker',
    template:`
        <h2>Should mankid colonize the Universe ?</h2>
        <h3>Agree: {{agreed}}, Disagreed: {{disagreed}}</h3>
        <app-voter *ngFor="let voter of voters" [name]="voter" (voted)="onVoted($event)" ></app-voter>
    `
})
export class VotetakerComponent{
    agreed = 0;
    disagreed = 0;
    voters = ['Mr Quân', 'Ms Gia Linh', 'Ms Khánh An'];
    onVoted(agreed: boolean) {
        if(agreed) {
            this.agreed ++;
        } else {
            this.disagreed ++;
        }
    }
}