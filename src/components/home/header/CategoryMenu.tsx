import DropdownMegaMenu from "./DropdownMegaMenu";

function CategoryMenu() {
  return (
    <div id="navCatContent" className="nav_cat navbar collapse">
      <ul> 
          <li className="dropdown dropdown-mega-menu">
              <a className="dropdown-item nav-link dropdown-toggler" href="#" data-bs-toggle="dropdown"><i className="flaticon-woman"></i> <span>Woman's</span></a>
              <DropdownMegaMenu />
          </li>
          <li className="dropdown dropdown-mega-menu">
              <a className="dropdown-item nav-link dropdown-toggler" href="#" data-bs-toggle="dropdown"><i className="flaticon-boss"></i> <span>Men's</span></a>
              <DropdownMegaMenu />
          </li>
          <li className="dropdown dropdown-mega-menu">
              <a className="dropdown-item nav-link dropdown-toggler" href="#" data-bs-toggle="dropdown"><i className="flaticon-friendship"></i> <span>Kid's</span></a>
              <DropdownMegaMenu />
          </li>
          <li className="dropdown dropdown-mega-menu">
              <a className="dropdown-item nav-link dropdown-toggler" href="#" data-bs-toggle="dropdown"><i className="flaticon-sunglasses"></i> <span>Accessories</span></a>
              <DropdownMegaMenu />
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
