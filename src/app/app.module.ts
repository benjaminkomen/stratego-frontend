import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BoardComponent} from './board/board.component';
import {PiecesComponent} from './pieces/pieces.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {StateService} from './shared/state.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    PiecesComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
