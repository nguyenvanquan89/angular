import { Component, OnDestroy } from "@angular/core";

@Component({
    selector: 'app-countdown-timer',
    template:`
        <p>{{message}}</p>
    `
})
export class CountDownTimerComponent implements OnDestroy{

    message = '';
    seconds = 11;
    private clearTimer : VoidFunction | undefined;

    ngOnDestroy(): void {
        this.clearTimer?.();
    }

    start(){this.countDown();}
    stop(){
        this.clearTimer?.();
        this.message = `Holding at T-${this.seconds} seconds`;
    }

    private countDown() {
        this.clearTimer ?.();
        const interval = setInterval(() => {
            this.seconds -= 1;
            if(this.seconds === 0) {
                this.message = 'Blast off';
            } else {
                if(this.seconds<0){this.seconds = 10;} //reset
                this.message = `T-${this.seconds} seconds and counting`;
            }
        }, 1000);
        this.clearTimer = () => clearInterval(interval);
    }

}