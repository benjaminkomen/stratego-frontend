export class Tile {
  constructor(public xCoordinate: number, public yCoordinate: number, public walkable: boolean) {

  }

  public toString(): string {
    return `(${this.xCoordinate},${this.yCoordinate})`;
  }
}
