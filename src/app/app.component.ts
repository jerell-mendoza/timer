import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  date = new Date();
  countdown = '00:00:00';
  countdownInterval;

  start(endTime) {
    console.log('started');
    console.log(endTime);
    this.countdownInterval = setInterval(() => {
      this.date = new Date();
      const splitEndTime = endTime.split(':');
      const totalSecondsEnd = splitEndTime[0] * 3600 + splitEndTime[1] * 60;
      const totalSecondsNow = this.date.getHours() * 3600 + this.date.getMinutes() * 60 + this.date.getSeconds();

      if (totalSecondsEnd < totalSecondsNow) {
        clearInterval(this.countdownInterval);
        return this.countdown = 'FINISHED!!!';
      }

      let totalSecondsLeft: number = totalSecondsEnd - totalSecondsNow;

      const hoursLeft = Math.floor(totalSecondsLeft / 3600).toString();
      totalSecondsLeft = totalSecondsLeft % 3600;
      const minutesLeft = Math.floor(totalSecondsLeft / 60).toString();
      totalSecondsLeft = totalSecondsLeft % 60;
      const secondsLeft = totalSecondsLeft.toString();

      this.countdown = `${hoursLeft.padStart(2, '0')}:${minutesLeft.padStart(2, '0')}:${secondsLeft.padStart(2, '0')}`;
    }, 500);
    console.log('start');
  }

  end() {
    clearInterval(this.countdownInterval);
    console.log('end');
  }

}
