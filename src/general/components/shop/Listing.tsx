import ProductItem from '../global/ProductItem';
import Filters from './Filters';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { appendScript, base_url, scriptUrls } from '../../../utils/utils';
import { Product } from '../../../features/shop/shopSlice';
import Loader from '../global/Loader';

const Wrapper = styled.div`
  .btn {
    padding: 12px 24px;
  }
`;

function Listing(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [filter, setFilter] = useState('all');

  const getProducts = async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await axios.get(`${base_url}/shop/products`);

      if (res?.data?.status === 'success') {
        setProducts(res.data.data.products);
      }

      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      console.log(e);
    }
  };

  const getProductsByFilter = async (): Promise<void> => {
    if (filter === 'all') {
      await getProducts();
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get(`${base_url}/shop/products/${filter}`);

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
    getProductsByFilter();
  }, [filter]);

  useEffect(() => {
    if (!loading) {
      scriptUrls.forEach((url) => appendScript(url));
    }
    // eslint-disable-next-line
  }, [loading]);

  // useEffect(() => {
  //   getProducts();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {loading ? (
              <Loader />
            ) : (
              <div className="row">
                {products
                  ?.filter((item: any) =>
                    category === 'all'
                      ? true
                      : item.category.name.toLowerCase() ===
                        category.toLowerCase()
                  )
                  .map((item: Product, index: number) => (
                    <ProductItem
                      key={index}
                      shopClassNames="col-lg-3 col-md-4 col-6 shop"
                      product={item}
                    />
                  ))}
                {products?.filter((item: any) =>
                  category === 'all'
                    ? true
                    : item.category.name.toLowerCase() ===
                      category.toLowerCase()
                )?.length ? null : (
                  <p>No products found</p>
                )}
              </div>
            )}
          </div>
          <Filters setFilter={setFilter} setCategory={setCategory} />
        </div>
      </div>
    </Wrapper>
  );
}

export default Listing;
