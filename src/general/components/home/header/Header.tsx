import logo_light from '../../../../assets/images/Funky_white.png';
import logo_dark from '../../../../assets/images/Funky.png';
import cart_thamb1 from '../../../../assets/images/cart_thamb1.jpg';
import cart_thamb2 from '../../../../assets/images/cart_thamb2.jpg';
import CategoryMenu from './CategoryMenu';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../../../../utils/utils';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  .navbar-brand {
    img {
      height: 48px;
    }
  }

  @media screen and (max-width: 768px) {
    .navbar-brand {
      img {
        height: 24px;
      }
    }
  }
`;

function Header() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchWord, setSearchWord] = useState('');

  const getData = async (): Promise<void> => {
    try {
      const res = await axios.get(`${base_url}/shop/categories`);

      if (res.data.status === 'success') {
        setCategories(res.data.data.categories);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = (e: any) => {
    e.preventDefault();

    navigate(
      `shop?search=${searchWord}${
        selectedCategory ? `&category=${selectedCategory}` : ''
      }`
    );
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper className="header_wrap">
      <div className="middle-header dark_skin">
        <div className="container">
          <div className="nav_block">
            <a className="navbar-brand" href="/">
              <img className="logo_light" src={logo_light} alt="logo" />
              <img className="logo_dark" src={logo_dark} alt="logo" />
            </a>
            <div className="contact_phone order-md-last">
              <i className="linearicons-phone-wave"></i>
              <span>123-456-7689</span>
            </div>
            <div className="product_search_form">
              <form onSubmit={handleSearch}>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="custom_select">
                      <select
                        name="category"
                        className="first_null"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        <option value="">All</option>
                        <option value="Dresses">Dresses</option>
                        <option value="Shirt-Tops">Shirt &amp; Tops</option>
                        <option value="T-Shirt">T-Shirt</option>
                        <option value="Pents">Pents</option>
                        <option value="Jeans">Jeans</option>
                        {categories?.map((item: any, index: number) => (
                          <option key={index} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    name="search"
                    placeholder="Search Product..."
                    type="text"
                    onChange={(e) => setSearchWord(e.target.value)}
                    required
                  />
                  <button type="submit" className="search_btn">
                    <i className="linearicons-magnifier"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_header light_skin main_menu_uppercase bg_dark mb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-3">
              <div className="categories_wrap">
                <button
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navCatContent"
                  aria-expanded="false"
                  className="categories_btn"
                >
                  <i className="linearicons-menu"></i>
                  <span>All Categories </span>
                </button>
                <CategoryMenu />
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-6 col-9">
              <nav className="navbar navbar-expand-lg">
                <button
                  className="navbar-toggler side_navbar_toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSidetoggle"
                  aria-expanded="false"
                >
                  <span className="ion-android-menu"></span>
                </button>
                <div
                  className="collapse navbar-collapse mobile_side_menu"
                  id="navbarSidetoggle"
                >
                  <ul className="navbar-nav">
                    <li>
                      <a className="nav-link nav_item" href="/shop">
                        Shop
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="navbar-nav attr-nav align-items-center">
                  <li>
                    <a href="/account" className="nav-link">
                      <i className="linearicons-user"></i>
                    </a>
                  </li>
                  <li className="dropdown cart_dropdown">
                    <a
                      className="nav-link cart_trigger"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      <i className="linearicons-cart"></i>
                      <span className="cart_count">2</span>
                    </a>
                    <div className="cart_box dropdown-menu dropdown-menu-right">
                      <ul className="cart_list">
                        <li>
                          <a href="#" className="item_remove">
                            <i className="ion-close"></i>
                          </a>
                          <a href="#">
                            <img src={cart_thamb1} alt="cart_thumb1" />
                            Variable product 001
                          </a>
                          <span className="cart_quantity">
                            {' '}
                            1 x{' '}
                            <span className="cart_amount">
                              {' '}
                              <span className="price_symbole">$</span>
                            </span>
                            78.00
                          </span>
                        </li>
                        <li>
                          <a href="#" className="item_remove">
                            <i className="ion-close"></i>
                          </a>
                          <a href="#">
                            <img src={cart_thamb2} alt="cart_thumb2" />
                            Ornare sed consequat
                          </a>
                          <span className="cart_quantity">
                            {' '}
                            1 x{' '}
                            <span className="cart_amount">
                              {' '}
                              <span className="price_symbole">$</span>
                            </span>
                            81.00
                          </span>
                        </li>
                      </ul>
                      <div className="cart_footer">
                        <p className="cart_total">
                          <strong>Subtotal:</strong>{' '}
                          <span className="cart_price">
                            {' '}
                            <span className="price_symbole">$</span>
                          </span>
                          159.00
                        </p>
                        <p className="cart_buttons">
                          <a
                            href="/cart"
                            className="btn btn-fill-line view-cart"
                          >
                            View Cart
                          </a>
                          <a
                            href="/checkout"
                            className="btn btn-fill-out checkout"
                          >
                            Checkout
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="pr_search_icon">
                  <a href="#" className="nav-link pr_search_trigger">
                    <i className="linearicons-magnifier"></i>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
