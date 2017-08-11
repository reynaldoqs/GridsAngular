import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <span class="close" (click)="onClose()">&#10006;</span>
    <app-modal-box [item]="item"></app-modal-box>
  `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input()item;
  @Output()close: EventEmitter <any> = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  onClose() {
    this.close.emit(null);
  }
}
