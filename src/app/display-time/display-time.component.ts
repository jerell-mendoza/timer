import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-display-time',
  templateUrl: './display-time.component.html',
  styleUrls: ['./display-time.component.css']
})
export class DisplayTimeComponent implements OnInit {

  @Input() countdown: string;
  @Output() start: EventEmitter<any> = new EventEmitter<any>();
  @Output() stop: EventEmitter<any> = new EventEmitter<any>();

  countdownToTime: string;

  constructor() { }

  ngOnInit() {
  }

  public startCountDown(): void {
    this.start.emit(this.countdownToTime);
  }

}
