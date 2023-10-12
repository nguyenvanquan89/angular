import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector:'app-version-child',
    template:`
    <h3>Version : {{major}}.{{minor}}</h3>
    <h4>Change Log:</h4>
    <ul>
        <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
    `
})
export class VersionChildComponent implements OnChanges{
    @Input() major = 0;
    @Input() minor = 0;
    changeLog: string [] = [];

    
    ngOnChanges(changes: SimpleChanges): void {
        const log: string[] = [];
        for(const propName in changes) {
            const changeProp = changes[propName];
            const to = JSON.stringify(changeProp.currentValue);
            if(changeProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set to ${to}`);
            } else {
                const from = JSON.stringify(changeProp.previousValue);
                log.push(`${propName} changed from ${from} to ${to}`);
            }
        }
        this.changeLog.push(log.join(', '));
    }

}