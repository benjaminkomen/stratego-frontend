import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BoardComponent} from './board/board.component';
import {PiecesComponent} from './pieces/pieces.component';
import {NgDragDropModule} from 'ng-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    PiecesComponent
  ],
  imports: [
    BrowserModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
