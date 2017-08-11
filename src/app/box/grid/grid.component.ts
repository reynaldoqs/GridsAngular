import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  template: `
    <ul>
      <li *ngFor="let item of items">
        <app-card [item]="item" (select)="onSelect($event)"></app-card>
      </li>
    </ul>
  `,
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input()items;
  @Output()select: EventEmitter<any> = new EventEmitter();
  constructor() { }
  onSelect(item: any) {
    this.select.emit(item);
  }
  ngOnInit() {
  }

}
