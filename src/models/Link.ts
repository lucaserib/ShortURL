export default class Link {
  readonly identifier: string;
  url: string;
  visits: number;

  constructor(identifier: string, url: string) {
    this.identifier = identifier;
    (this.url = url), (this.visits = 0);
  }
}
