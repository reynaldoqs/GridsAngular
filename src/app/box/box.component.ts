import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `
    <h2>Box components</h2>
    <app-grid [items]="items" (select)="onSelect($event)"></app-grid>
  `,
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input()items;
  @Output()select: EventEmitter<any> = new EventEmitter();
  constructor() { }
  onSelect(item: any) {
    this.select.emit(item);
  }
  ngOnInit() {
  }


}
