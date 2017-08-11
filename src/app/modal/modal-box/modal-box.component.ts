import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { trigger, transition, query, animate, style, group, animateChild, stagger } from '@angular/animations';

@Component({
  selector: 'app-modal-box',
  template: `
    <div class="modal-container">
      <img src="{{item.images.mainURL}}">
    </div>
  `,
  styleUrls: ['./modal-box.component.css'],
animations: [
    trigger('modalAnimation', [
      transition(':enter', group([
        query('.modal-container', style({ opacity: 0, transform: 'rotateX(-90deg) translateY(150px) translateZ(50px)' })),
        query('.modal-container', group([
          animate('150ms', style({opacity: 1})),
          animate('200ms ease-in', style({ transform: 'matrix(1, 0, 0, 1, 0, 0)' }))
        ]))
      ]))
    ])
  ]
})
export class ModalBoxComponent implements OnInit {
  @HostBinding('@modalAnimation')modalAnimation = true;
  @Input()item;
  constructor() { }

  ngOnInit() {
  }

}
