export class Ad {
  public id: string;
  public address: string;
  public description: string;
  public price: string;
  public imagePath: string;

  constructor(
    id: string,
    address: string,
    description: string,
    price: string,
    imagePath: string
  ) {
    this.id = id;
    this.address = address;
    this.description = description;
    this.price = price;
    this.imagePath = imagePath;
  }
}
