import ProductItem from '../global/ProductItem';
import Filters from './Filters';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { base_url } from '../../../utils/utils';
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

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {loading ? (
              <Loader />
            ) : (
              <div className="row">
                {products?.map((item: Product, index: number) => (
                  <ProductItem
                    key={index}
                    shopClassNames="col-lg-3 col-md-4 col-6"
                    product={item}
                  />
                ))}
              </div>
            )}
          </div>
          <Filters />
        </div>
      </div>
    </Wrapper>
  );
}

export default Listing;
