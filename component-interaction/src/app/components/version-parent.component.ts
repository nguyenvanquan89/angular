import { Component } from "@angular/core";

@Component({
    selector:'app-version-parent', 
    template: `
    <h2>Source code version</h2>
    <button type="button" (click)="newMinor()" >New Minor version</button>
    <button type="button" (click)="newMajor()" >New Major version</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
    `
}) 
export class VersionParentComponent{
    major = 1;
    minor = 2;
    newMinor() {
        this.minor++;
    }
    newMajor() {
        this.major++;
        this.minor = 0;
    }
}