import { useState, useEffect } from 'react';
import { getProductList } from '../services';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [productRequested, setProductRequested] = useState(false);

  useEffect(() => {
    const requestProductList = async () => {
      try {
        const requestedProductList = await getProductList();
        console.log('requestedProductList', requestedProductList);
        setProductList(requestedProductList);
        setProductRequested(true);
      } catch (e) {
        console.log('error', e);
        return false;
      }
    }
    if (!productRequested)
      requestProductList();

  }, [productList, productRequested])

  console.log('productList', productList);

  if (!productRequested) {
    return (
      <div>Loading ...</div>
    );
  }

  return (
    <div>
      Page rendered
    </div>
  );

}

export default ProductList