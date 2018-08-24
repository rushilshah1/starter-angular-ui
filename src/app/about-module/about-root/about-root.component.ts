import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-root',
  templateUrl: './about-root.component.html',
  styleUrls: ['./about-root.component.css']
})
export class AboutRootComponent implements OnInit {

  showImage: boolean = false;
  caption: string;
  picWidth = 100;

  constructor() { }

  ngOnInit() {
  }

  displayImage($event) {
    this.showImage = !this.showImage;
    this.caption = $event;
  }
}
