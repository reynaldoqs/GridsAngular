import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { GridComponent } from './box/grid/grid.component';
import { CardComponent } from './box/grid/parts/card/card.component';
import { FigureComponent } from './box/grid/parts/card/figure/figure.component';
import { CardInfoComponent } from './box/grid/parts/card/card-info/card-info.component';
import { ModalComponent } from './modal/modal.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalBoxComponent } from './modal/modal-box/modal-box.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    GridComponent,
    FigureComponent,
    CardInfoComponent,
    CardComponent,
    ModalComponent,
    ModalBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
