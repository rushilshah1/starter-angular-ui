import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  
  @Input('component')
  component: string;
  @Input('title')
  title: string;
  @Input('pageSummary')
  pageSummary: string;
  @Input('buttonText')
  buttonText: string;

  @Output()
  show: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  emitEvent() {
    if(this.component === 'about') this.show.emit("Sweater Weather");
    else if(this.component == 'home') this.show.emit(true);
    else this.show.emit();
  }

}
