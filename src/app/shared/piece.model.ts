import {PieceName} from './piece-name.enum';
import {PieceStatus} from './piece-status.enum';

export class Piece {
  constructor(public id: number, public value: number, public name: PieceName, public status: PieceStatus,
              public movable: boolean, public runnable: boolean) {

  }

  public imageSourcePath(): string {
    return `./assets/images/${this.name.toString().toLowerCase()}.png`;
  }


  public toString(): string {
    return `${this.name.toString()}`;
  }
}
