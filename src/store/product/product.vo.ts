export default class ProductVO {
  readonly id: string;
  name: string;

  constructor(data: ProductVO) {
    Object.assign(this, data);
  }
}
