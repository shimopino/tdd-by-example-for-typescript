export class Pair {
  private from: string;
  private to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  public equals(other: Pair) {
    return this.from === other.from && this.to === other.to;
  }

  public hashCode() {
    return 0;
  }
}
