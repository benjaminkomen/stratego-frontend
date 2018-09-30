import {Component, OnInit} from '@angular/core';
import {Tile} from '../shared/tile.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private notWalkableXCoordinates: number[] = [2, 3, 6, 7];
  private notWalkableYCoordinates: number[] = [4, 5];
  tiles: Tile[] = [];

  constructor() {
  }

  ngOnInit() {
    this.createBoard();
  }

  public getNumberOfTiles() {
    return this.tiles.length;
  }

  public getNumberOfWalkableTiles() {
    return this.tiles
      .filter(t => t.walkable)
      .length;
  }

  public getNumberOfNonWalkableTiles() {
    return this.tiles
      .filter(t => !t.walkable)
      .length;
  }

  private createBoard() {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        this.tiles.push(this.createTile(x, y));
      }
    }
  }

  private createTile(x: number, y: number) {
    if (this.notWalkableYCoordinates.includes(x) && this.notWalkableXCoordinates.includes(y)) {
      return new Tile(x, y, false);
    } else {
      return new Tile(x, y, true);
    }
  }
}
