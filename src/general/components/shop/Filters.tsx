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

function Filters(props: any): JSX.Element {
  const { search } = useLocation();
  const selectedCategory = new URLSearchParams(search).get('category');
  const selectedBrand = new URLSearchParams(search).get('brand');

  const categories = useAppSelector((state) => state.shop.categories);
  const brands = useAppSelector((state) => state.shop.brands);
  const tags = useAppSelector((state) => state.shop.tags);

  return (
    <Wrapper className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
      <div className="sidebar">
        {/* <div className="custom_select">
          <select className="form-control form-control-sm">
            <option value="order">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="date">Sort by newness</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
        </div>
        <div className="small_divider"></div> */}
        <div className="widget">
          <h5 className="widget_title">Categories</h5>
          <ul className="widget_categories">
            {/* Refactor search */}
            {/* {categories?.map((item, index) => (
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
            ))} */}
            <li>
              <div className="custome-radio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="category"
                  id="all_categories"
                  value="all"
                  defaultChecked={true}
                  onClick={(e: any) => props.setCategory(e.target.value)}
                />
                <label className="form-check-label" htmlFor="all_categories">
                  <span>All</span>
                </label>
              </div>
            </li>
            {categories?.map((item, index) => (
              <li key={index}>
                <div className="custome-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    id={item.name}
                    value={item.name}
                    onClick={(e: any) => props.setCategory(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor={item.name}>
                    <span>{item.name}</span>
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="widget">
          <h5 className="widget_title">Filters</h5>
          <ul className="list_brand">
            <li>
              <div className="custome-radio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filter"
                  id="all_filters"
                  value="all"
                  defaultChecked={true}
                  onClick={(e: any) => props.setFilter(e.target.value)}
                />
                <label className="form-check-label" htmlFor="all_filters">
                  <span>All</span>
                </label>
              </div>
            </li>
            <li>
              <div className="custome-radio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filter"
                  id="arrivals"
                  value="arrivals"
                  onClick={(e: any) => props.setFilter(e.target.value)}
                />
                <label className="form-check-label" htmlFor="arrivals">
                  <span>New Arrivals</span>
                </label>
              </div>
            </li>
            <li>
              <div className="custome-radio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filter"
                  id="best-selling"
                  value="best-selling"
                  onClick={(e: any) => props.setFilter(e.target.value)}
                />
                <label className="form-check-label" htmlFor="best-selling">
                  <span>Best Selling</span>
                </label>
              </div>
            </li>
            <li>
              <div className="custome-radio">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filter"
                  id="discounted"
                  value="discounted"
                  onClick={(e: any) => props.setFilter(e.target.value)}
                />
                <label className="form-check-label" htmlFor="discounted">
                  <span>Special Offers</span>
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
