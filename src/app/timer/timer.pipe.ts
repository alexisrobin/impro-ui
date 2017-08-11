import { Pipe } from "@angular/core";

@Pipe({
    name: 'timer'
})
export class TimerPipe {
    transform(seconds){
        let minutes = Math.floor(seconds / 60).toString();
        seconds = (seconds - +minutes * 60).toString();

        if(+minutes < 10) minutes = '0' + minutes;
        if(+seconds < 10) seconds = '0' + seconds;

        return minutes + ':' + seconds;
    }
}