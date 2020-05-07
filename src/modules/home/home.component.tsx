import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'app/redux/redux.store';
import { ProductVO, productSlice } from 'common/modules/product';
import './home.component.scss';

function Home() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = new ProductVO({ id: '1', name: 'example product' });
    dispatch(productSlice.actions.saveProducts([product]));
  }, []);

  console.warn(products, products.byId, products.allIds);
  return <div>home</div>
}

export default Home;
