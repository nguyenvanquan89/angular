import{Component, AfterViewInit, ViewChild} from "@angular/core"
import { CountDownTimerComponent } from "./countdown-timer.component";

@Component({
    selector:'app-countdown-via-vc',
    template:`
    <h3>Countdown to Liftoff (via View Child)</h3>
    <button type="button" (click)="start()">Start</button>
    <button type="button" (click)="stop()">Stop</button>
    <div class="seconds">{{seconds()}}</div>
    <app-countdown-timer></app-countdown-timer>
    `,
    styleUrls : ['./countdown-parent.component.css']
})
export class CountDownParentViaVcComponent implements AfterViewInit {

    @ViewChild(CountDownTimerComponent)
    private timerComponent !: CountDownTimerComponent;
    seconds() {return 0;}

    ngAfterViewInit(): void {
        // Redefine `seconds()` to get from the `CountDownTimerComponent.seconds`...
        // but wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation-error
        setTimeout(() => this.seconds = () => this.timerComponent.seconds,0);
    }

    start() {this.timerComponent.start();}
    stop() {this.timerComponent.stop();}

}