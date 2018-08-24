import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.css']
})
export class HomeRootComponent implements OnInit {

  showForm: boolean = false;

  constructor() { }
  ngOnInit() {
  }

  showCreateForm($event) {
    this.showForm = $event;
  }
}
