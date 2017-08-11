import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
      <app-figure [item]="item" (select)="onSelect($event)"></app-figure>
      <app-card-info [item]="item"></app-card-info>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()item;
  @Output()select: EventEmitter<any> = new EventEmitter();
  constructor() { }
  onSelect(item: any) {
    this.select.emit(item);
  }
  ngOnInit() {
  }

}
