import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import styled from 'styled-components';

const Wrapper = styled.div`
  .filter-item {
    &.active {
      color: ;
    }
  }
`;

function Filters(): JSX.Element {
  const { search } = useLocation();
  const selectedCategory = new URLSearchParams(search).get('category');
  const selectedBrand = new URLSearchParams(search).get('brand');

  const categories = useAppSelector((state) => state.shop.categories);
  const brands = useAppSelector((state) => state.shop.brands);
  const tags = useAppSelector((state) => state.shop.tags);

  return (
    <Wrapper className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
      <div className="sidebar">
        <div className="custom_select">
          <select className="form-control form-control-sm">
            <option value="order">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="date">Sort by newness</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
        </div>
        <div className="small_divider"></div>
        <div className="widget">
          <h5 className="widget_title">Categories</h5>
          <ul className="widget_categories">
            {/* Refactor search */}
            {categories?.map((item, index) => (
              <li key={index}>
                <a
                  href={
                    search
                      ? selectedCategory
                        ? `/shop${search}`
                        : `/shop${search}&category=${item.name}`
                      : `/shop?category=${item.name}`
                  }
                  className={`filter-item${
                    selectedCategory === item.name ? ' active' : ''
                  }`}
                >
                  <span className="categories_name">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="widget">
          <h5 className="widget_title">Brands</h5>
          <ul className="list_brand">
            <li>
              <div className="custome-checkbox">
                <input
                  className="form-check-input"
                  type="radio"
                  name="checkbox"
                  id="Arrivals"
                  value=""
                />
                <label className="form-check-label" htmlFor="Arrivals">
                  <span>New Arrivals</span>
                </label>
              </div>
            </li>
            <li>
              <div className="custome-checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="Lighting"
                  value=""
                />
                <label className="form-check-label" htmlFor="Lighting">
                  <span>Lighting</span>
                </label>
              </div>
            </li>
            <li>
              <div className="custome-checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="Tables"
                  value=""
                />
                <label className="form-check-label" htmlFor="Tables">
                  <span>Tables</span>
                </label>
              </div>
            </li>
            <li>
              <div className="custome-checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="Chairs"
                  value=""
                />
                <label className="form-check-label" htmlFor="Chairs">
                  <span>Chairs</span>
                </label>
              </div>
            </li>
            <li>
              <div className="custome-checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="Accessories"
                  value=""
                />
                <label className="form-check-label" htmlFor="Accessories">
                  <span>Accessories</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export default Filters;
