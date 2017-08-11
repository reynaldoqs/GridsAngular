import { Component } from '@angular/core';
import { ITEMS } from './items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  modal = false;
  items = ITEMS;
  selectedItem;
  onSelect(item: any) {
    this.selectedItem = item;
    this.modal = true;
  }
  onClose(){
    this.modal = false;
  }
}
