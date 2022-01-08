import logo_light from "../../../assets/images/logo_light.png";
import logo_dark from "../../../assets/images/logo_dark.png";
import menu_banner1 from "../../../assets/images/menu_banner1.jpg";
import menu_banner2 from "../../../assets/images/menu_banner2.jpg";
import menu_banner4 from "../../../assets/images/menu_banner4.jpg";
import menu_banner5 from "../../../assets/images/menu_banner5.jpg";
import cart_thamb1 from "../../../assets/images/cart_thamb1.jpg";
import cart_thamb2 from "../../../assets/images/cart_thamb2.jpg";

function Header() {
  return (

<header className="header_wrap">
	<div className="top-header d-none d-md-block">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-8">
                	<div className="header_topbar_info">
                    	<div className="header_offer">
                    		<span>Free Ground Shipping Over $250</span>
                        </div>
                        <div className="download_wrap">
                            <span className="me-3">Download App</span>
                            <ul className="icon_list text-center text-lg-start">
                                <li><a href="#"><i className="fab fa-apple"></i></a></li>
                                <li><a href="#"><i className="fab fa-android"></i></a></li>
                                <li><a href="#"><i className="fab fa-windows"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-4">
                	<div className="d-flex align-items-center justify-content-center justify-content-md-end">
                        <div className="lng_dropdown">
                            <select name="countries" className="custome_select">
                                <option value='en' data-image="assets/images/eng.png" data-title="English">English</option>
                                <option value='fn' data-image="assets/images/fn.png" data-title="France">France</option>
                                <option value='us' data-image="assets/images/us.png" data-title="United States">United States</option>
                            </select>
                        </div>
                        <div className="ms-3">
                            <select name="countries" className="custome_select">
                                <option value='USD' data-title="USD">USD</option>
                                <option value='EUR' data-title="EUR">EUR</option>
                                <option value='GBR' data-title="GBR">GBR</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="middle-header dark_skin">
    	<div className="container">
        	<div className="nav_block">
                <a className="navbar-brand" href="index.html">
                    <img className="logo_light" src={logo_light} alt="logo" />
                    <img className="logo_dark" src={logo_dark} alt="logo" />
                </a>
                <div className="contact_phone order-md-last">
                    <i className="linearicons-phone-wave"></i>
                    <span>123-456-7689</span>
                </div>
                <div className="product_search_form">
                    <form>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="custom_select">
                                    <select className="first_null">
                                        <option value="">All Category</option>
                                        <option value="Dresses">Dresses</option>
                                        <option value="Shirt-Tops">Shirt &amp; Tops</option>
                                        <option value="T-Shirt">T-Shirt</option>
                                        <option value="Pents">Pents</option>
                                        <option value="Jeans">Jeans</option>
                                    </select>
                                </div>
                            </div>
                            <input className="form-control" placeholder="Search Product..." type="text" required />
                            <button type="submit" className="search_btn"><i className="linearicons-magnifier"></i></button>
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
                        <button type="button" data-bs-toggle="collapse" data-bs-target="#navCatContent" aria-expanded="false" className="categories_btn">
                            <i className="linearicons-menu"></i><span>All Categories </span>
                        </button>
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
                                	<ul className="more_slide_open">
                                    	<li><a className="dropdown-item nav-link nav_item" href="login.html"><i className="flaticon-pijamas"></i> <span>Sleepwear</span></a></li>
                                        <li><a className="dropdown-item nav-link nav_item" href="register.html"><i className="flaticon-scarf"></i> <span>Seasonal Wear</span></a></li>
                                        <li><a className="dropdown-item nav-link nav_item" href="404.html"><i className="flaticon-vintage"></i> <span>Ethinic Wear</span></a></li>
                                        <li><a className="dropdown-item nav-link nav_item" href="coming-soon.html"><i className="flaticon-pregnant"></i> <span>Baby Clothing</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="more_categories">More Categories</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-6 col-9">
                	<nav className="navbar navbar-expand-lg">
                    	<button className="navbar-toggler side_navbar_toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSidetoggle" aria-expanded="false"> 
                            <span className="ion-android-menu"></span>
                        </button> 
                        <div className="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle">
                            <ul className="navbar-nav">
                                <li><a className="nav-link nav_item" href="/">Home</a></li> 
                                <li><a className="nav-link nav_item" href="/shop">Shop</a></li> 
                                <li><a className="nav-link nav_item" href="/contact">Contact Us</a></li> 
                            </ul>
                        </div>
                        <ul className="navbar-nav attr-nav align-items-center">
                        	<li><a href="#" className="nav-link"><i className="linearicons-user"></i></a></li>
                            <li><a href="#" className="nav-link"><i className="linearicons-heart"></i><span className="wishlist_count">0</span></a></li>
                            <li className="dropdown cart_dropdown"><a className="nav-link cart_trigger" href="#" data-bs-toggle="dropdown"><i className="linearicons-cart"></i><span className="cart_count">2</span></a>
                                <div className="cart_box dropdown-menu dropdown-menu-right">
                                    <ul className="cart_list">
                                        <li>
                                            <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                            <a href="#"><img src={cart_thamb1} alt="cart_thumb1"/>Variable product 001</a>
                                            <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>78.00</span>
                                        </li>
                                        <li>
                                            <a href="#" className="item_remove"><i className="ion-close"></i></a>
                                            <a href="#"><img src={cart_thamb2} alt="cart_thumb2"/>Ornare sed consequat</a>
                                            <span className="cart_quantity"> 1 x <span className="cart_amount"> <span className="price_symbole">$</span></span>81.00</span>
                                        </li>
                                    </ul>
                                    <div className="cart_footer">
                                        <p className="cart_total"><strong>Subtotal:</strong> <span className="cart_price"> <span className="price_symbole">$</span></span>159.00</p>
                                        <p className="cart_buttons"><a href="#" className="btn btn-fill-line view-cart">View Cart</a><a href="#" className="btn btn-fill-out checkout">Checkout</a></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="pr_search_icon">
                        	<a href="#" className="nav-link pr_search_trigger"><i className="linearicons-magnifier"></i></a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>

  )
}

export default Header
