import logo_light from '../../../assets/images/Funky_white.png';
import logo_dark from '../../../assets/images/Funky.png';
import styled from 'styled-components';
import CartPreview from './CartPreview';
import { useAppSelector } from '../../../redux/hooks';

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

function Navbar() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const token = useAppSelector((state) => state.auth.token);

  return (
    <Wrapper className="header_wrap header_with_topbar sticky-top">
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="d-flex align-items-center justify-content-md-start">
                <ul className="contact_detail text-center text-lg-start">
                  <li>
                    <i className="ti-mobile"></i>
                    <span>123-456-7890</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="text-end">
                <ul className="header_list">
                  <li>
                    {token ? (
                      <a href="/account">
                        <i className="ti-user"></i>
                        <span>My account</span>
                      </a>
                    ) : (
                      <a href="/login">
                        <i className="ti-user"></i>
                        <span>Login</span>
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_header dark_skin main_menu_uppercase">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
              <img className="logo_light" src={logo_light} alt="logo" />
              <img className="logo_dark" src={logo_dark} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-expanded="false"
            >
              <span className="ion-android-menu"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li>
                  <a className="nav-link nav_item" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link nav_item" href="/shop">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav attr-nav align-items-center">
              <li>
                <a href="#" className="nav-link search_trigger">
                  <i className="linearicons-magnifier"></i>
                </a>
                <div className="search_wrap">
                  <span className="close-search">
                    <i className="ion-ios-close-empty"></i>
                  </span>
                  <form>
                    <input
                      type="text"
                      placeholder="Search"
                      className="form-control"
                      id="search_input"
                    />
                    <button type="submit" className="search_icon">
                      <i className="ion-ios-search-strong"></i>
                    </button>
                  </form>
                </div>
                <div className="search_overlay"></div>
              </li>
              <li className="dropdown cart_dropdown">
                <a
                  className="nav-link cart_trigger"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="linearicons-cart"></i>
                  {!!cartItems.length && (
                    <span className="cart_count">{cartItems?.length}</span>
                  )}
                </a>
                <div className="cart_box dropdown-menu dropdown-menu-right">
                  <CartPreview cartItems={cartItems} />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
