import {Component, OnInit} from '@angular/core';
import {Piece} from '../shared/piece.model';
import {PieceStatus} from '../shared/piece-status.enum';
import {PieceName} from '../shared/piece-name.enum';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.css']
})
export class PiecesComponent implements OnInit {

  pieces: Piece[] = [];

  constructor() {
  }

  ngOnInit() {
    this.createPieces();
  }

  private createPieces() {
    this.pieces.push(
      new Piece(0, 0, PieceName.Flag, PieceStatus.Levend, false, false),
      new Piece(0, 1, PieceName.Spy, PieceStatus.Levend, true, false),
      new Piece(0, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(0, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(0, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(0, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(0, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(0, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(0, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(0, 2, PieceName.Scout, PieceStatus.Levend, true, true),
      new Piece(0, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(0, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(0, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(0, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(0, 3, PieceName.Miner, PieceStatus.Levend, true, false),
      new Piece(0, 4, PieceName.Sergeant, PieceStatus.Levend, true, false),
      new Piece(0, 4, PieceName.Sergeant, PieceStatus.Levend, true, false),
      new Piece(0, 4, PieceName.Sergeant, PieceStatus.Levend, true, false),
      new Piece(0, 4, PieceName.Sergeant, PieceStatus.Levend, true, false),
      new Piece(0, 5, PieceName.Lieutenant, PieceStatus.Levend, true, false),
      new Piece(0, 5, PieceName.Lieutenant, PieceStatus.Levend, true, false),
      new Piece(0, 5, PieceName.Lieutenant, PieceStatus.Levend, true, false),
      new Piece(0, 5, PieceName.Lieutenant, PieceStatus.Levend, true, false),
      new Piece(0, 6, PieceName.Captain, PieceStatus.Levend, true, false),
      new Piece(0, 6, PieceName.Captain, PieceStatus.Levend, true, false),
      new Piece(0, 6, PieceName.Captain, PieceStatus.Levend, true, false),
      new Piece(0, 6, PieceName.Captain, PieceStatus.Levend, true, false),
      new Piece(0, 7, PieceName.Major, PieceStatus.Levend, true, false),
      new Piece(0, 7, PieceName.Major, PieceStatus.Levend, true, false),
      new Piece(0, 7, PieceName.Major, PieceStatus.Levend, true, false),
      new Piece(0, 8, PieceName.Colonel, PieceStatus.Levend, true, false),
      new Piece(0, 8, PieceName.Colonel, PieceStatus.Levend, true, false),
      new Piece(0, 9, PieceName.General, PieceStatus.Levend, true, false),
      new Piece(0, 10, PieceName.Marshal, PieceStatus.Levend, true, false),
      new Piece(0, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(0, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(0, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(0, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(0, 11, PieceName.Bomb, PieceStatus.Levend, false, false),
      new Piece(0, 11, PieceName.Bomb, PieceStatus.Levend, false, false)
    );
  }
}
