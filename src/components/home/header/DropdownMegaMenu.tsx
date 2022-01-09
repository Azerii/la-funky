import menu_banner1 from "../../../assets/images/menu_banner1.jpg";
import menu_banner2 from "../../../assets/images/menu_banner2.jpg";

function DropdownMegaMenu() {
  return (
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
  )
}

export default DropdownMegaMenu
