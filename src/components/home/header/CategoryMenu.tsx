import menu_banner1 from "../../../assets/images/menu_banner1.jpg";
import menu_banner2 from "../../../assets/images/menu_banner2.jpg";
import menu_banner4 from "../../../assets/images/menu_banner4.jpg";
import menu_banner5 from "../../../assets/images/menu_banner5.jpg";

function CategoryMenu() {
  return (
    <div id="navCatContent" className="nav_cat navbar collapse">
      <ul> 
          <li className="dropdown dropdown-mega-menu">
              <a className="dropdown-item nav-link dropdown-toggler" href="#" data-bs-toggle="dropdown"><i className="flaticon-woman"></i> <span>Woman's</span></a>
              <div className="dropdown-menu">
                  <ul className="mega-menu d-lg-flex">
                      <li className="mega-menu-col col-lg-7">
                          <ul className="d-lg-flex">
                              <li className="mega-menu-col col-lg-6">
                                  <ul> 
                                      <li className="dropdown-header">Featured Item</li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                  </ul>
                              </li>
                              <li className="mega-menu-col col-lg-6">
                                  <ul>
                                      <li className="dropdown-header">Popular Item</li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                      <li className="mega-menu-col col-lg-5">
                          <div className="header-banner2">
                              <img src={menu_banner1} alt="menu_banner1" />
                              <div className="banne_info">
                                  <h6>10% Off</h6>
                                  <h4>New Arrival</h4>
                                  <a href="#">Shop now</a>
                              </div>
                          </div>
                          <div className="header-banner2">
                              <img src={menu_banner2} alt="menu_banner2" />
                              <div className="banne_info">
                                  <h6>15% Off</h6>
                                  <h4>Men's Fashion</h4>
                                  <a href="#">Shop now</a>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </li>
          <li className="dropdown dropdown-mega-menu">
              <a className="dropdown-item nav-link dropdown-toggler" href="#" data-bs-toggle="dropdown"><i className="flaticon-boss"></i> <span>Men's</span></a>
              <div className="dropdown-menu">
                  <ul className="mega-menu d-lg-flex">
                      <li className="mega-menu-col col-lg-7">
                          <ul className="d-lg-flex">
                              <li className="mega-menu-col col-lg-6">
                                  <ul> 
                                      <li className="dropdown-header">Featured Item</li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                  </ul>
                              </li>
                              <li className="mega-menu-col col-lg-6">
                                  <ul>
                                      <li className="dropdown-header">Popular Item</li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                      <li className="mega-menu-col col-lg-5">
                          <div className="header-banner2">
                              <a href="#"><img src={menu_banner4} alt="menu_banner4" /></a>
                          </div>
                      </li>
                  </ul>
              </div>
          </li>
          <li className="dropdown dropdown-mega-menu">
              <a className="dropdown-item nav-link dropdown-toggler" href="#" data-bs-toggle="dropdown"><i className="flaticon-friendship"></i> <span>Kid's</span></a>
              <div className="dropdown-menu">
                  <ul className="mega-menu d-lg-flex">
                      <li className="mega-menu-col col-lg-7">
                          <ul className="d-lg-flex">
                              <li className="mega-menu-col col-lg-6">
                                  <ul> 
                                      <li className="dropdown-header">Featured Item</li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Vestibulum sed</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur tempus</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                  </ul>
                              </li>
                              <li className="mega-menu-col col-lg-6">
                                  <ul>
                                      <li className="dropdown-header">Popular Item</li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Curabitur laoreet</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Vivamus in tortor</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae facilisis</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Quisque condimentum</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Etiam ac rutrum</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec vitae ante ante</a></li>
                                      <li><a className="dropdown-item nav-link nav_item" href="#">Donec porttitor</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                      <li className="mega-menu-col col-lg-5">
                          <div className="header-banner2">
                              <a href="#"><img src={menu_banner5} alt="menu_banner5" /></a>
                          </div>
                      </li>
                  </ul>
              </div>
          </li>
          <li className="dropdown dropdown-mega-menu">
              <a className="dropdown-item nav-link dropdown-toggler" href="#" data-bs-toggle="dropdown"><i className="flaticon-sunglasses"></i> <span>Accessories</span></a>
              <div className="dropdown-menu">
                  <ul className="mega-menu d-lg-flex">
                      <li className="mega-menu-col col-lg-4">
                          <ul> 
                              <li className="dropdown-header">Woman's</li>
                              <li><a className="dropdown-item nav-link nav_item" href="shop-list-left-sidebar.html">Vestibulum sed</a></li>
                              <li><a className="dropdown-item nav-link nav_item" href="shop-left-sidebar.html">Donec porttitor</a></li>
                              <li><a className="dropdown-item nav-link nav_item" href="shop-right-sidebar.html">Donec vitae facilisis</a></li>
                              <li><a className="dropdown-item nav-link nav_item" href="shop-list.html">Curabitur tempus</a></li>
                              <li><a className="dropdown-item nav-link nav_item" href="shop-load-more.html">Vivamus in tortor</a></li>
                          </ul>
                      </li>
                      <li className="mega-menu-col col-lg-4">
                          <ul>
                              <li className="dropdown-header">Men's</li>
                              <li><a className="dropdown-item nav-link nav_item" href="shop-cart.html">Donec vitae ante ante</a></li>
                              <li><a className="dropdown-item nav-link nav_item" href="checkout.html">Etiam ac rutrum</a></li>
                              <li><a className="dropdown-item nav-link nav_item" href="wishlist.html">Quisque condimentum</a></li>
                              <li><a className="dropdown-item nav-link nav_item" href="compare.html">Curabitur laoreet</a></li>
                              <li><a className="dropdown-item nav-link nav_item" href="order-completed.html">Vivamus in tortor</a></li>
                          </ul>
                      </li>
                      <li className="mega-menu-col col-lg-4">
                          <ul>
                              <li className="dropdown-header">Kid's</li>
                              <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">Donec vitae facilisis</a></li>
                              <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-left-sidebar.html">Quisque condimentum</a></li>
                              <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-right-sidebar.html">Etiam ac rutrum</a></li>
                              <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec vitae ante ante</a></li>
                              <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail-thumbnails-left.html">Donec porttitor</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </li>
          <li><a className="dropdown-item nav-link nav_item" href="coming-soon.html"><i className="flaticon-jacket"></i> <span>Clothing</span></a></li>
          <li><a className="dropdown-item nav-link nav_item" href="404.html"><i className="flaticon-sneakers"></i> <span>Shoes</span></a></li>
          <li><a className="dropdown-item nav-link nav_item" href="login.html"><i className="flaticon-watch"></i> <span>Watches</span></a></li>
          <li><a className="dropdown-item nav-link nav_item" href="register.html"><i className="flaticon-necklace"></i> <span>Jewellery</span></a></li>
          <li><a className="dropdown-item nav-link nav_item" href="coming-soon.html"><i className="flaticon-herbal"></i> <span>Health & Beauty</span></a></li>
          <li><a className="dropdown-item nav-link nav_item" href="404.html"><i className="flaticon-ball"></i> <span>Sports</span></a></li>
          <li>
            <ul className="more_slide_open" style={{display: "none"}}>
                <li><a className="dropdown-item nav-link nav_item" href="login.html"><i className="flaticon-pijamas"></i> <span>Sleepwear</span></a></li>
                  <li><a className="dropdown-item nav-link nav_item" href="register.html"><i className="flaticon-scarf"></i> <span>Seasonal Wear</span></a></li>
                  <li><a className="dropdown-item nav-link nav_item" href="404.html"><i className="flaticon-vintage"></i> <span>Ethinic Wear</span></a></li>
                  <li><a className="dropdown-item nav-link nav_item" href="coming-soon.html"><i className="flaticon-pregnant"></i> <span>Baby Clothing</span></a></li>
              </ul>
          </li>
      </ul>
      <div className="more_categories">More Categories</div>
  </div>
  )
}

export default CategoryMenu
