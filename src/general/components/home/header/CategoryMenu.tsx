
function CategoryMenu() {
  return (
    <div id="navCatContent" className="nav_cat navbar collapse">
      <ul> 
          <li>
              <a className="dropdown-item nav-link nav_item" href="#"><i className="flaticon-woman"></i> <span>Women</span></a>
          </li>
          <li>
              <a className="dropdown-item nav-link nav_item" href="#"><i className="flaticon-boss"></i> <span>Men</span></a>
          </li>
          <li>
              <a className="dropdown-item nav-link nav_item" href="#"><i className="flaticon-friendship"></i> <span>Kids</span></a>
          </li>
          <li>
              <a className="dropdown-item nav-link nav_item" href="#"><i className="flaticon-sunglasses"></i> <span>Accessories</span></a>
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
