import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figure',
  template: `
    <figure>
      <a href="#">
      <img src="{{item.images.mainURL}}" alt="">
      </a>
      <div class="bf-effect"></div>
      <div class="hover-item top left soon">
        <div class="soon-item">
          <strong>01</strong>
          <span>SEM</span>
        </div>
        <div class="soon-item">
          <strong>32</strong>
          <span>DIAS</span>
        </div>
        <div class="soon-item">
          <strong>02</strong>
          <span>HORAS</span>
        </div>
      </div>
      <div class="hover-item center">
        <button class="center-button" (click)="onSelect(item)">revisar</button>
      </div>
      <div class="hover-item top right social">
        <div class="social-item fb"></div>
        <div class="social-item tw"></div>
        <div class="social-item gl"></div>
      </div>
      <div class="hover-item bottom right">
        bottom-right
      </div>
    </figure>
      `,
  styleUrls: ['./figure.component.css']
})
export class FigureComponent implements OnInit {
  @Input()item;
  @Output()select: EventEmitter <any> = new EventEmitter();
  constructor() { }
  onSelect(item: any) {
    this.select.emit(item);
  }
  ngOnInit() {
  }

}
