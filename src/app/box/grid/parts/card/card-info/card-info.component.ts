import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  template: `
    <div class="container">
      <div class="row">
        <h3>Caroline Colasse</h3>
      </div>
      <div class="row">
        By <span class="strong-1">Audiman QS</span> from Bolivia.
      </div>
      <div class="row">
        Agosto 01, 2017 en <span class="strong-2">La Paz</span>
      </div>
      <div class="footer">
        <ul>
          <li *ngFor="let item of item.images.galery">
            <div class="footer-item">
              <img src="{{item.imgUrl}}" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {
  @Input()item;
  constructor() { }

  ngOnInit() {
  }

}
