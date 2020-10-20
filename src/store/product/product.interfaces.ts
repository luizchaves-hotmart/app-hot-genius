import ProductVO from './product.vo';

export interface IProductState {
  allIds: string[];
  byId: { [id: string]: ProductVO };
}
