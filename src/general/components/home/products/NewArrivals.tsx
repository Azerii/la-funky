import { useEffect, useState } from 'react';
import { base_url } from '../../../../utils/utils';
import ProductsSection from './ProductsSection';
import axios from 'axios';

function NewArrivals() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await axios.get(`${base_url}/shop/products/arrivals`);

      if (res?.data?.status === 'success') {
        setProducts(res.data.data.products);
      }

      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <ProductsSection
      title="New Arrivals"
      products={products}
      loading={loading}
    />
  );
}

export default NewArrivals;
