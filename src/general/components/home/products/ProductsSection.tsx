import styled from 'styled-components';
import Loader from '../../global/Loader';
import ProductItem from '../../global/ProductItem';

const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 0;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

interface Props {
  title: string;
  products: any[];
  loading?: boolean;
}

function ProductsSection(props: Props): JSX.Element {
  const { title, products, loading } = props;

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_tab_header">
              <div className="heading_s2">
                <h2>{title}</h2>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <ProductsWrapper>
            {products?.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </ProductsWrapper>
        )}
      </div>
    </Wrapper>
  );
}

export default ProductsSection;
